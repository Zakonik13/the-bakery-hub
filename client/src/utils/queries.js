import gql from "graphql-tag";

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      email
    }
  }
`;
