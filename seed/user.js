const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createUsers = async () => {
  const newUsers = [
    {
      username: 'Fox Mulder',
      pass: '12345',
      homeoffice: 'Chicago',
      image: '',
      department: 'Flavor department',
      about: "I'm weird"
    },
    {
      username: 'Dana Scully',
      pass: '12345',
      homeoffice: 'Los Angeles',
      image: '',
      department: 'Digging and Forking department',
      about: "I'm Great"
    },
    {
      username: 'Walter Skinner',
      pass: '12345',
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
