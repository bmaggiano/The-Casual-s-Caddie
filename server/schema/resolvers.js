const { AuthenticationError } = require('apollo-server-express')
const { User } = require('../models');
const { signToken } = require('../utils/auth')
const clubSchema = require('../models/club')
const { OAuth2Client } = require('google-auth-library');
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
        // loginWithGoogle: async (parent, { idToken }) => {
        //     const user = await User.findOne({ email: profile.email });
        //     if (!user) {
        //       // create a new user with the profile information
        //       const newUser = await User.create({
        //         email: profile.email,
        //         name: profile.name,
        //       });
        //       const token = signToken(user)
        //       return { token, newUser };
        //     }
        //     const token = signToken(user)
        //     return { token, user };
        //   },
        loginWithGoogle: async (parent, { idToken }, { client }) => {
            try {
              const ticket = await client.verifyIdToken({
                idToken,
                audience: process.env.GOOGLE_CLIENT_ID,
              });
              const payload = ticket.getPayload();
              const { email, name } = payload;
              let user = await User.findOne({ email });
              if (!user) {
                // create a new user with the profile information
                const newUser = await User.create({
                  email,
                  name,
                });
                const token = signToken({ email, name });
                return { token, newUser };
              }
              const token = signToken(user);
              return { token, user };
            } catch (err) {
              console.log(err);
              throw new AuthenticationError('Invalid login credentials');
            }
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
                    // for some reason "args" works but "args._id" doesn't
                    { $pull: { clubs: args }},
                    { new: true, runValidators: true },
                )
                return updatedClub
               } 
               throw new AuthenticationError('You need to be logged in to change club distances')
        },
        addDistance: async (parent, args, context) => {
            if (context.user) {
                const updatedClub = await User.findOneAndUpdate(
                    { _id: context.user._id, "clubs._id": args._id},
                    { $set: {
                        "clubs.$.clubHigh": args.clubHigh,
                        "clubs.$.clubLow": args.clubLow,
                        "clubs.$.clubAverage": args.clubAverage,
                        "clubs.$.dateTested": Date.now()
                    }},
                    { new: true, runValidators: true }
                );
                return updatedClub;
            }
            throw new AuthenticationError('You need to be logged in to update club distances');
        }
}
}

module.exports = resolvers;