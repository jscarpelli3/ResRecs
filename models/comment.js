const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    comment: { type: String, required: false },
    user: { type: String, required: false },
    rest: { type: Schema.Types.ObjectId, ref: 'Restaurant' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', Comment)
