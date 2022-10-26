const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createUsers = async () => {
  const newUsers = [
    {
      username: 'Jack Squat',
      homeoffice: 'Chicago',
      image: '',
      department: 'Flavor department',
      about: "I'm great"
    },
    {
      username: 'Freddie Freeloader',
      homeoffice: 'Los Angeles',
      image: '',
      department: 'Digging and Forking department',
      about: "I'm decent"
    },
    {
      username: 'Allie Can',
      homeoffice: 'Austin',
      image: '',
      department: 'Steppin and Glidin department',
      about: "I'm fair"
    }
  ]
  await User.insertMany(newUsers)
  console.log('Created Users!')
  return newUsers
}

const run = async () => {
  await createUsers()
  db.close()
}

run()
