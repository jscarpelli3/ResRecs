const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'user_id' },
    comment: { type: String, required: false },
    rest: { type: Schema.Types.ObjectId, ref: 'restaurant_id' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', Comment)
