const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
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
      if (context.user) {
        return User.findOne({ _id: context.user._id });
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
    addTask: async (parent, { userId, task }) => {
      // console.log(typeof mongoose.Types.ObjectId(userId))
      // console.log(mongoose.Types.ObjectId(userId))
      const taskData = await User.findByIdAndUpdate(
        { _id: userId },
        { $addToSet: { tasks: { taskItem: task } } },
        { new: true }
      )
      console.log(taskData)
      return taskData
    },
    deleteTask: async (parent, { userId, taskId }) => {
      const taskData = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { tasks: taskId } },
        { new: true }
      )
      return userData
    },
    updateTask: async (parent, { taskId, taskItem, taskStatus }) => {
      const userData = await Task.findOneAndUpdate(
        { _id: taskId },
        { taskItem: taskItem, taskStatus: taskStatus },
        { new: true }
      )
      return userData
    },
  },
};

module.exports = resolvers;
