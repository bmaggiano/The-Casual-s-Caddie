const { AuthenticationError } = require('apollo-server-express')
const { User, Club } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({_id: context.user._id}).populate('clubs')
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
        addUser: async ( parent, { username, email, password }) => {
            const user = await User.create({ username, email, password })
            const token = signToken(user)
            return { token, user };
        },
        addClub: async (parent, args, context) => {
           if (context.user) {
            const updatedClub = await User.findOneAndUpdate(
                {_id: context.user._id},
                { $addToSet: { clubs: args._id }},
                { new: true, runValidators: true },
            )
            console.log(updatedClub)
            return updatedClub
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
        // addDistance: async (parent, args, context) => {
        //     if (context.user) {
        //         const updatedDistance = await User.findOneAndUpdate(
        //             {_id: context.user._id},
        //             { $addToSet: {clubs: {clubAverage: args.clubAverage},},},
        //             { new: true, runValidators: true},
        //         )
        //         return updatedDistance
        //     }
        //     throw new AuthenticationError('You need to be logged in to change club distances')
        // }
        addDistance: async (parent, args, context) => {
            if (context.user) {
                try {
                    // Find the user document
                    const user = await User.findOne({_id: context.user._id});
                
                    // Find the club in the user's club array
                    const clubIndex = user.clubs.findIndex(club => club._id === args.clubId);
        
                    // Find the club object 
                    const club = await Club.findOne({_id: args.clubId})
                    // Update the average distance of the club
                    club.averageDistance = args.newDistance;
                    await club.save()
                    
                    // Save the updated user document
                    return user.save()
                } catch(err){
                    return err
                }
            }
    }
}

module.exports = resolvers;