import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    hello: String!
    getWaypoints: [Waypoint!]!
  }

  type Cat {
    id: ID!
  }

  type Waypoint {
    id: ID!
    long: Float!
    lat: Float!
    nature: String!
  }

  type Mutation {
    createCat(name: String!): Cat!
    createWaypoint(long: Float!, lat: Float!, nature: String!): Waypoint!
  }
`;