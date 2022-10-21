const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Restaurant = new Schema(
  {
    rname: { type: String, required: true },
    cuisine: { type: String, required: true },
    city: { type: String, required: false },
    state: { type: String, required: false },
    eventType: { type: String, required: true },
    breakfast: { type: Boolean },
    lunch: { type: Boolean },
    dinner: { type: Boolean },
    notes: { type: String, required: false },
    website: { type: String, required: true },
    contributor: { type: Schema.Types.ObjectId, ref: 'user_id' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Restaurant', Restaurant)
