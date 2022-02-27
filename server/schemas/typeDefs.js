const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    user(email: String!): User
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    email: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
