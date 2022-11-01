const mongoose = require('mongoose')
require('dotenv').config()

// let MONGODB_URI = 'mongodb://127.0.0.1:27017/resrecDB'
let dbUrl =
  process.env.NODE_ENV === 'production'
    ? 'mongodb+srv://jscarpelli:superhero12@resrecscluster.onm8q8l.mongodb.net/?retryWrites=true&w=majority'
    : 'mongodb://127.0.0.1:27017/resrecsDB'

mongoose
  .connect(dbUrl)
  // .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
