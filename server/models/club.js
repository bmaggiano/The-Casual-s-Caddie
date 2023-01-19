const { Schema, model } = require('mongoose');


const clubSchema = new Schema({
    clubName: {
        type: String
    },
    clubAverage: {
        type: Number
    },
    clubHigh: {
        type: Number
    },
    clubLow: {
        type: Number
    },
    dateTested: {
        type: Date,
        default: Date.now
    }
})

const Club = model('Club', clubSchema);

module.exports = Club;