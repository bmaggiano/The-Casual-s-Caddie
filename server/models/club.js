const { Schema, model } = require('mongoose');


const clubSchema = new Schema({
    clubName: {
        type: String
    },
    clubAverage: {
        type: String
    },
    clubHigh: {
        type: String
    },
    clubLow: {
        type: String
    },
    dateTested: {
        type: Date,
        default: Date.now
    }
})

const Club = model('Club', clubSchema);

module.exports = Club;