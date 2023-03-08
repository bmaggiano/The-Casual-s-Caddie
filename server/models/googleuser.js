const { Schema, model } = require('mongoose');
const Club   = require('./club')

const googleUserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  name: {
    type: String,
    // required: true,
    unique: true,
  },
  clubs: [Club.schema]
  ,
});

const GoogleUser = model('GoogleUser', googleUserSchema);

module.exports = GoogleUser;
