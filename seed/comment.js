const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createUsers = async () => {
  const newUsers = [
    {
      user: '',
      comment: 'This Place is bannanas!',
      rest: ''
    },
    {
      user: '',
      comment: 'This Place is WickedAwesome!',
      rest: ''
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
