const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Query {
        me: User
        clubs(_id: ID, clubId: Int, clubName: String, clubAverage: String, clubHigh: String, clubLow: String, dateTested: String): [Club]
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
        clubAverage: String
        clubHigh: String
        clubLow: String
        dateTested: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String, email: String, password: String): Auth
        addDistance(clubId: Int, clubAverage: String): Club
        addClub(_id: ID): User
        removeClub(_id: ID): User
    }
`;

module.exports = typeDefs;
