const db = require('../db')
const Comment = require('../models/comment')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createComments = async () => {
  const newComments = [
    {
      userId: '635beb25b2292b1ac380fd0c',
      user: 'Mulder',
      comment: 'Too many people.',
      rest: '635bf18e03127a709e25c768'
    },
    {
      userId: '635beb25b2292b1ac380fd0d',
      user: 'Scully',
      comment: 'This kettner Place is bannanas!',
      rest: '635bf18e03127a709e25c768'
    },
    {
      userId: '635beb25b2292b1ac380fd0d',
      user: 'Scully',
      comment: 'MAJOR-AWESOME-O!',
      rest: '635bf18e03127a709e25c76c'
    },
    {
      userId: '635beb25b2292b1ac380fd0c',
      user: 'Mulder',
      comment: 'AUSTIN REALLY IS WEIRD!!! NOT!!',
      rest: '635bf18e03127a709e25c769'
    },
    {
      userId: '635beb25b2292b1ac380fd0c',
      user: 'Mulder',
      comment: 'This Place is ATX CRAZY!',
      rest: '635bf18e03127a709e25c769'
    },
    {
      userId: '635beb25b2292b1ac380fd0c',
      user: 'Mulder',
      comment: 'Ramerino is a weird name',
      rest: '635bf18e03127a709e25c76a'
    },
    {
      userId: '635beb25b2292b1ac380fd0e',
      user: 'TheDude',
      comment: 'Wayfare Tavern Rules',
      rest: '635bf18e03127a709e25c76b'
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
