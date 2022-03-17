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

export const ADD_STAT = gql`
mutation addStat(
  $userId: String,
  $highScore: Int, 
  $guess1: Int, 
  $guess2: Int, 
  $guess3: Int, 
  $guess4: Int, 
  $guess5: Int, 
  $guess6: Int, 
  $guess7: Int, 
  $guess8: Int, 
  $averageTries: Float, 
  $gamesPlayed: Int
  ) {
    addStat(
      userId: $userId
      highScore: $highScore
      guess1: $guess1
      guess2: $guess2
      guess3: $guess3
      guess4: $guess4
      guess5: $guess5
      guess6: $guess6
      guess7: $guess7
      guess8: $guess8
      averageTries: $averageTries
      gamesPlayed: $gamesPlayed
      ) {
          _id
          userId
          highScore
          guess1
          guess2
          guess3
          guess4
          guess5
          guess6
          guess7
          guess8
          averageTries
          gamesPlayed
      }
}
`


export const ADD_TASK = gql`
  mutation AddTask($task: String!) {
    addTask(task: $task) {
      _id
      taskItem
      completed
    }
  }
`;

export const UPDATE_TRIES = gql`
  mutation updateTries($tries: Int, $average: Float,) {
    updateTries(tries: $tries, average: $average,) {
      _id
      userId
      highScore
      guess1
      guess2
      guess3
      guess4
      guess5
      guess6
      guess7
      guess8
      averageTries
      gamesPlayed
    }
  }
`