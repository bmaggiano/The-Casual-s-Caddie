const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Query {
        googleMe: GoogleUser
        me: User
        clubs(_id: ID, clubId: Int, clubName: String, clubAverage: Float, clubHigh: Float, clubLow: Float, dateTested: String): [Club]
    }

    type User {
        _id: ID
        username: String
        email: String
        clubs: [Club]
    }

    type GoogleUser {
        _id: ID
        name: String
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

    type GoogleAuth {
        token: ID!
        user: GoogleUser
    }

    type Mutation {
        loginUser(email: String!, password: String!): Auth
        loginWithGoogle(idToken: ID!): GoogleAuth
        addUser(username: String, email: String, password: String): Auth
        addDistance(_id: ID, clubAverage: Float, clubLow: Float, clubHigh: Float, clubName: String, dateTested: String): User
        addClub(clubName: String): User
        removeClub(_id: ID): User
    }
`;

module.exports = typeDefs;
