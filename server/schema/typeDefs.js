const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Query {
        me: User
        clubs(_id: ID, clubId: Int, clubName: String, clubAverage: Float, clubHigh: Float, clubLow: Float, dateTested: String): [Club]
    }

    type User {
        _id: ID
        username: String
        email: String
        clubs: [Club]
    }

    type Club {
        _id: ID
        clubId: Int
        clubName: String
        clubAverage: Float
        clubHigh: Float
        clubLow: Float
        dateTested: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String, email: String, password: String): Auth
        addDistance(_id: ID, clubAverage: Float, clubLow: Float, clubHigh: Float, clubName: String, dateTested: String): User
        addClub(clubName: String): User
        removeClub(_id: ID): User
    }
`;

module.exports = typeDefs;
