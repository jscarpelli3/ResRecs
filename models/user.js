const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: { type: String, required: true },
    pass: { type: String, required: true },
    homeoffice: { type: String, required: true },
    image: { type: String, required: false },
    department: { type: String, required: true },
    about: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', User)
