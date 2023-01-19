const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Query {
        me: User
        clubs(_id: ID, clubId: Int, clubName: String, clubAverage: Int, clubHigh: Int, clubLow: Int, dateTested: String): [Club]
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
        clubAverage: Int
        clubHigh: Int
        clubLow: Int
        dateTested: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String, email: String, password: String): Auth
        # addDistance(clubId: Int, clubAverage: String): Club
        addDistance(clubId: Int, clubAverage: Int): User
        addClub(_id: ID): User
        removeClub(_id: ID): User
    }
`;

module.exports = typeDefs;
