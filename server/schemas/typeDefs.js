const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
  _id: ID
  firstName: String
  lastName: String
  email: String
  tasks: [Task]
}

type Task {
  _id: ID
  taskItem: String
  completed: Boolean
}

type Auth {
  token: ID!
  user: User
}

type Query {
  users: [User]
  user(username: String!): User
  me: User
}

type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addTask(userId: ID!, task:String!): Task
  deleteTask(userId: ID!, taskId: ID!): Task
  updateTask(taskId: ID!, taskItem: String, taskStatus: Boolean): Task
}
`;

module.exports = typeDefs;
