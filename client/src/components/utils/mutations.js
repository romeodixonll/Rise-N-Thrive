import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        
      }
    }
  }
`;

export const SAVE_OPTIONS = gql`
  mutation addOptions($optionsData: OptionInput){
    addOptions(optionsData: $optionsData){
      _id
      savedOptions{
        optionId
        options
      }
    }
  }

`

export const REMOVE_OPTIONS = gql`
  mutation removeOptions($optionId: ID!){
    removeOptions(optionId: $optionId){
      _id
      savedOptions{
        optionId
        options
      }
    }
  }

`



export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_TASK = gql`
  mutation AddTask($task: String!) {
    addTask(task: $task) {
      _id
      taskItem
      completed
    }
  }
`

export const UPDATE_TASK = gql`
mutation Mutation($taskId: ID!, $taskItem: String, $taskStatus: Boolean) {
  updateTask(taskId: $taskId, taskItem: $taskItem, taskStatus: $taskStatus) {
    _id
    taskItem
    completed
  }
}
`