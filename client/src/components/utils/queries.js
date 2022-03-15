import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
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

