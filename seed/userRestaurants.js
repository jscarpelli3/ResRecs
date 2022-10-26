const db = require('../db')
const Restaurant = require('../models/restaurant')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

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
      image: 'https://images.otstatic.com/prod/24602000/1/huge.jpg',
      website: 'https://www.kettnerexchange.com/',
      contributor: '6358c44055c3a24cd7f7bf88'
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
      image: '',
      website: 'https://www.atxcocina.com/',
      contributor: '6358c44055c3a24cd7f7bf8a'
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
      image: '',
      website: 'https://www.atxcocina.com/',
      contributor: '6358c44055c3a24cd7f7bf88'
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
      image: '',
      contributor: '6358c44055c3a24cd7f7bf89'
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
      image: '',
      contributor: '6358c44055c3a24cd7f7bf88'
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
      image: '',
      contributor: '6358c44055c3a24cd7f7bf89'
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
