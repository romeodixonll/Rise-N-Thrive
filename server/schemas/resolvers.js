const { AuthenticationError } = require("apollo-server-express");
const { User, Task, Stat} = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    me: async (parent, args, context) => {
      // console.log(context.user)
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    allTasks: async (parent, args, context) => {
      // console.log(context.user)
      if (context.user) {
        let s =  await User.findById({_id: context.user._id}).populate('tasks')
        console.log(s)
        return s
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    allStats: async (parent, args, context) => {
      if (context.user) {
        let s =  await User.findById({_id: context.user._id}).populate('stats')
        console.log(s)
        return s
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addStat: async (parent, { highScore, guess1, guess2, guess3, guess4, guess5, guess6, guess7, guess8, averageTries, gamesPlayed}, context) => {
      const stat = await Stat.create({
        userId: context.user._id,
        highScore: highScore,
        guess1: guess1,
        guess2: guess2,
        guess3: guess3,
        guess4: guess4,
        guess5: guess5,
        guess6: guess6,
        guess7: guess7,
        guess8: guess8,
        averageTries: averageTries,
        gamesPlayed: gamesPlayed
      })

      const statData = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { stats: stat } },
        { new: true }
      )
      return statData
    },
    updateTries: async (parent, {tries, average}, context) => {
      const statData = await Stat.findOneAndUpdate(
        { userId: context.user._id },
        { $inc: { [`guess${tries}`]: 1, [`gamesPlayed`]: 1 }, $set: {averageTries: average} },
        { new: true }
      )
      return statData
    },
    addTask: async (parent, args, context) => {
      console.log("in addTask")
      const createTask = await Task.create({ taskItem: "Double Click to Edit" })
      const taskData = await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $addToSet: { tasks: createTask } },
        { new: true }
      )
      return taskData
    },
    deleteTask: async (parent, { userId, taskId }) => {
      const taskData = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { tasks: taskId } },
        { new: true }
      )
      const deleteTask = await Task.findByIdAndDelete(
        { _id: taskId },
        { new: true }
      )
      return taskData
    },
    updateTask: async (parent, { taskId, taskItem, taskStatus }) => {
      console.log(taskStatus)
      const userData = await Task.findByIdAndUpdate(
        { _id: taskId },
        { taskItem: taskItem, completed: taskStatus },
        { new: true }
      )
      return userData
    },


    addOptions:async(parent, {optionsData}, context)=>{
      if(context.user){
        const updatedUser = await User.findByIdAndUpdate(
          {_id:context.user._id},
          {$push:{savedOptions: optionsData}},
          {new: true}
        );
        return updatedUser
      }
      throw new AuthenticationError('You need to be logged in')
    },
    removeOptions: async(parent, {optionId}, context)=>{
      if(context.user){
        const updatedUser = await User.findByIdAndUpdate(
          {_id: context.user._id},
          {$pull: {savedOptions:{optionId}}},
          {new: true}
        )
        return updatedUser
      }
      throw new AuthenticationError('you need to be logged in')
    }



    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      console.log("-----------------")
      console.log(user)
      const token = signToken(user);

      return { token, user };
    },

  },
};

module.exports = resolvers;
