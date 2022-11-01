const db = require('../db')
const Comment = require('../models/comment')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createComments = async () => {
  const newComments = [
    {
      userId: '63609faae02994d53035a14e',
      user: 'Mulder',
      comment: 'Too many people.',
      rest: '6360a0c13a7a307b7097fb38'
    },
    {
      userId: '63609faae02994d53035a14f',
      user: 'Scully',
      comment: 'This kettner Place is bannanas!',
      rest: '6360a0c13a7a307b7097fb34'
    },
    {
      userId: '63609faae02994d53035a14f',
      user: 'Scully',
      comment: 'The client loved this restaurant!',
      rest: '6360a0c13a7a307b7097fb35'
    },
    {
      userId: '63609faae02994d53035a14e',
      user: 'Mulder',
      comment: 'Loved this place',
      rest: '6360a0c13a7a307b7097fb39'
    },
    {
      userId: '63609faae02994d53035a14e',
      user: 'Mulder',
      comment: 'This Place is my favorite!',
      rest: '6360a0c13a7a307b7097fb35'
    },
    {
      userId: '63609faae02994d53035a14e',
      user: 'Mulder',
      comment: 'Ramerino is a fun name',
      rest: '6360a0c13a7a307b7097fb36'
    },
    {
      userId: '63609faae02994d53035a150',
      user: 'Walter Skinner',
      comment: 'Wayfare Tavern Rules',
      rest: '6360a0c13a7a307b7097fb37'
    },
    {
      userId: '63609faae02994d53035a150',
      user: 'Walter Skinner',
      comment: 'We really did not enjoy RedFarm',
      rest: '6360a0c13a7a307b7097fb3b'
    }
  ]

  await Comment.insertMany(newComments)
  console.log('Created Comments!')
  return newComments
}

const run = async () => {
  await createComments()
  db.close()
}

run()
