const { AuthenticationError } = require('apollo-server-express')
const { User } = require('../models');
const { signToken } = require('../utils/auth')
const clubSchema = require('../models/club')
const Club = require ('../models/club')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({_id: context.user._id}).populate('club')
            }
            throw new AuthenticationError('You must be logged in')
        },
        clubs: async (parent, args) => {
            return Club.find()
        }
    },

    Mutation: {
        loginUser: async ( parent, { email, password }) => {
            const user = await User.findOne({email});

            if (!user) {
                throw new AuthenticationError('There is no profile associated with this email')
            }

            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError ('Incorrect email or password')
            }

            const token = signToken(user);
            return { token, user };
        },
        // look into UUID 
        //create separate branch
        addUser: async ( parent, { username, email, password }) => {
            const user = await User.create({ username, email, password })
            const token = signToken(user)
            return { token, user };
        },
        addClub: async (parent, args, context) => {
           if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                {_id: context.user._id},
                { $addToSet: { clubs: args }},
                { new: true, runValidators: true },
            )
            console.log(updatedUser)
            return updatedUser
           } 
           throw new AuthenticationError('You need to be logged in to change club distances')
        },
        removeClub: async (parent, args, context) => {
            if (context.user) {
                const updatedClub = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $pull: { clubs: args._id }},
                    { new: true, runValidators: true },
                )
                return updatedClub
               } 
               throw new AuthenticationError('You need to be logged in to change club distances')
        },
        // THIS WORKS TO UPDATE CLUB SIDE
        // addDistance: async (parent, args, context) => {
        //     if (context.user) {
        //         const updatedDistance = await Club.findOneAndUpdate(
        //             { _id: "63c9b3315145ff0db811ec2e" },
        //             { clubAverage: args.clubAverage},
        //             { new: true, runValidators: true},
        //         )
        //         return updatedDistance
        //     }
        //     throw new AuthenticationError('You need to be logged in to change club distances')
        // }
        addDistance: async (parent, args, context) => {
            if (context.user) {
                const updatedDistance = await User.findOneAndUpdate(
                    { _id: context.user._id, "clubs._id": "63c9d8a6c873212b70f6a1d8"},
                    { $set: { "clubs.$.clubAverage": args.clubAverage}},
                    { new: true, runValidators: true},
                    )
                return updatedDistance
            }
            throw new AuthenticationError('You need to be logged in to change club distances')
        }
}
}

module.exports = resolvers;