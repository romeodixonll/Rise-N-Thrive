import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      savedOptions{
        optionId
        options
      }
    }
  }
`;

export const QUERY_TASKS = gql`
query AllTasks {
  allTasks {
    tasks {
      _id
      taskItem
      completed
    }
  }
}
`

export const QUERY_STATS = gql`
query allStats {
  allStats {
    stats {
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
}
`

