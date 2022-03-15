const { AuthenticationError } = require("apollo-server-express");
const { User, Task} = require("../models");
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
      console.log(context.user)
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    allTasks: async (parent, args, context) => {
      console.log(context.user)
      if (context.user) {
        let s =  await User.findById({_id: context.user._id}).populate('tasks')
        console.log(s)
        return s
      }
      throw new AuthenticationError("You need to be logged in!");
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addTask: async (parent, args, context) => {

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
  },
};

module.exports = resolvers;
