const db = require('../db')
const User = require('../models/user')
const Restaurant = require('../models/restaurant')

// Connect to the database
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

const createRestaurants = async () => {
  const restaurants = [
    {
      rname: 'Kettner Exchange',
      cuisine: 'American',
      city: 'San Diego',
      address: '2001 Kettner Blvd, San Diego, CA 92101',
      eventType: 'Client Dinner',
      breakfast: false,
      lunch: false,
      dinner: true,
      notes: 'Closed Mondays',
      website: 'https://www.kettnerexchange.com/',
      contributor: []
    },
    {
      rname: 'ATX Cocina',
      cuisine: 'Modern Mexican',
      city: 'Austin',
      address: '110 San Antonio St #170, Austin, TX 78701',
      eventType: 'Client Dinner',
      breakfast: false,
      lunch: false,
      dinner: true,
      notes: 'Company favorite - upscale modern Mexican',
      website: 'https://www.atxcocina.com/',
      contributor: []
    },
    {
      rname: 'Ramerino - Italian Prime ',
      cuisine: 'Italian (veg, vegan and gluten free options)',
      city: 'New York',
      address: '16 E 39th Street (Midtown East)',
      eventType: 'Client Dinner',
      breakfast: false,
      lunch: true,
      dinner: true,
      notes:
        'Lunch is prix fixe.  Good for clients/business lunches and dinners',
      website: 'https://www.atxcocina.com/',
      contributor: []
    },
    {
      rname: 'Wayfare Tavern',
      cuisine: 'American',
      city: 'San Francisco',
      address: '558 Sacramento St, San Francisco, CA 94111',
      eventType: 'Client Dinner',
      breakfast: false,
      lunch: true,
      dinner: true,
      notes: '',
      website: 'https://www.wayfaretavern.com/',
      contributor: []
    },
    {
      rname: 'Majordomo',
      cuisine: 'New American',
      city: 'Los Angeles',
      address: '1725 Naud St, Los Angeles, CA 90012',
      eventType: 'Client Dinner',
      breakfast: false,
      lunch: false,
      dinner: true,
      notes: '',
      website: 'https://www.majordomo.la/',
      contributor: []
    },
    {
      rname: 'Mooo',
      cuisine: 'Steak & Seafood',
      city: 'Boston',
      address: '49 Melcher St, Boston, MA 02210',
      eventType: 'Client Dinner',
      breakfast: false,
      lunch: false,
      dinner: true,
      notes: 'Seaport',
      website: 'https://www.mooorestaurant.com/',
      contributor: []
    }
  ]

  await Restaurant.insertMany(restaurants)
  console.log('Created some restaurants!')
}

const run = async () => {
  // await createUsers()
  await createRestaurants()
  db.close()
}

run()
