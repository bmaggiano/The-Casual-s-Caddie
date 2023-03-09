const { AuthenticationError } = require('apollo-server-express')
const { User, GoogleUser } = require('../models');
const { signToken } = require('../utils/auth')
const { OAuth2Client } = require('google-auth-library');
const Club = require ('../models/club')

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


const verifyToken = async (idToken) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return payload;
  } catch (err) {
    console.error('Error verifying token:', err);
    throw new AuthenticationError('Invalid login credentials');
  }
};


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
        },
        googleMe: async (parent, args, context) => {
            if (context.user) {
                return GoogleUser.findOne({name: context.user.name}).populate('club')
            }
            throw new AuthenticationError('You must be logged in')
        },
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


        loginWithGoogle: async (parent, { idToken }) => {
            const payload = await verifyToken(idToken)
            const email = payload.email
            const name = payload.name
            const user = await GoogleUser.findOne({ email });
                      
            if (!user) {
              // create a new user with the profile information
              const newUser = await GoogleUser.create({
                email,
                name
              });
          
              const token = signToken(newUser);
              return { token, newUser };
            } else {
              const token = signToken(user);
              return { token, user };
            }
          },
          
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
            return updatedUser
           } 
           throw new AuthenticationError('You need to be logged in to change club distances')
        },
        addGoogleClub: async (parent, args, context) => {
           if (context.user) {
            const updatedUser = await GoogleUser.findOneAndUpdate(
                {name: context.user.name},
                { $addToSet: { clubs: args }},
                { new: true, runValidators: true },
            )
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
        removeGoogleClub: async (parent, args, context) => {
            if (context.user) {
                const updatedClub = await GoogleUser.findOneAndUpdate(
                    {name: context.user.name},
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
        },
        addGoogleDistance: async (parent, args, context) => {
            if (context.user) {
                const updatedClub = await GoogleUser.findOneAndUpdate(
                    { name: context.user.name, "clubs._id": args._id},
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

module.exports = { resolvers };