const db = require('../config/connection')
const { User, Club } = require('../models/index')
const clubSeed = require('./clubSeed.json')

db.once('open', async () => {
    try {
        await Club.deleteMany({});

        await Club.create(clubSeed)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
    console.log('seed success!')
    process.exit(0)
})