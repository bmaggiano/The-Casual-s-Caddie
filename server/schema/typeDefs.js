const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Query {
        me: User
        clubs(_id: ID, clubName: String, clubAverage: String, clubHigh: String, clubLow: String, dateTested: String): [Club]
    }

    type User {
        _id: ID
        username: String
        email: String
        clubs: [club]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        loginUser(email: String, password: String): Auth
        addUser(username: String, email: String, password: String): Auth
        addDistance(_id: ID): User
        removeDistance(_id: ID): User
    }
`