const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
  _id: ID
  firstName: String
  lastName: String
  email: String
  tasks: [Task]
  stats: [Stat]
}

type Task {
  _id: ID
  taskItem: String
  completed: Boolean
}

type Stat {
  _id: ID
  userId: String
  highScore: Int
  guess1: Int
  guess2: Int
  guess3: Int
  guess4: Int
  guess5: Int
  guess6: Int
  guess7: Int
  guess8: Int
  averageTries: Float
  gamesPlayed: Int
}

type Auth {
  token: ID!
  user: User
}

type Options{
  optionId: ID!
  options:[String]
}

type Query {
  users: [User]
  user(username: String!): User
  me: User
  allTasks: User
  allStats: User
}

input OptionInput{
  options:[String]
}

type Mutation {
  addOptions(optionsData: OptionInput):User
  removeOptions(optionId: ID!):User
  addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  addStat(userId: String, highScore: Int, guess1: Int, guess2: Int, guess3: Int, guess4: Int,guess5: Int, guess6: Int, guess7: Int, guess8: Int, averageTries: Float, gamesPlayed: Int) : Stat
  updateTries(tries: Int, average: Float) : Stat
  login(email: String!, password: String!): Auth
  addTask(task:String!): Task
  deleteTask(userId: ID!, taskId: ID!): Task
  updateTask(taskId: ID!, taskItem: String, taskStatus: Boolean): Task
}
`;

module.exports = typeDefs;
