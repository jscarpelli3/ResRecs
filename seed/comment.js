const db = require('../db')
const Comment = require('../models/comment')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createComments = async () => {
  const newComments = [
    {
      user: '6359866ddf2351809b34ce88',
      comment: 'This kettner Place is bannanas! - freddy',
      rest: '63598672e1da67f72b1eb624'
    },
    {
      user: '6359866ddf2351809b34ce88',
      comment: 'This kettner Place is bannanas! - freddy',
      rest: '63598672e1da67f72b1eb624'
    },
    {
      user: '6359866ddf2351809b34ce87',
      comment: 'This Place is ATX CRAZY! this is jack',
      rest: '63598672e1da67f72b1eb625'
    },
    {
      user: '6359866ddf2351809b34ce87',
      comment: 'This Place is ATX! this is jack',
      rest: '63598672e1da67f72b1eb625'
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
