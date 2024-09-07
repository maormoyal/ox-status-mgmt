const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    id: ID!
    name: String!
    status: String!
    avatar: String!
  }

  type Query {
    getEmployees: [Employee]
  }

  type Mutation {
    createEmployee(name: String!, status: String!, avatar: String!): Employee
    updateEmployee(id: ID!, name: String, status: String): Employee
    deleteEmployee(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
