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
      contributor: 'Mulder',
      contributorId: '63609faae02994d53035a14e'
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
      image: 'https://images.otstatic.com/prod/25099192/1/huge.jpg',
      website: 'https://www.atxcocina.com/',
      contributor: 'Mulder',
      contributorId: '63609faae02994d53035a14e'
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
      image: 'https://resizer.otstatic.com/v2/photos/xlarge/2/48632375.jpg',
      website: 'https://www.atxcocina.com/',
      contributor: 'Mulder',
      contributorId: '63609faae02994d53035a14e'
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
      image: 'https://images.otstatic.com/prod/23369699/1/huge.jpg',
      contributor: 'Mulder',
      contributorId: '63609faae02994d53035a14f'
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
      notes: 'We really enjoyed our time at Majordomo',
      website: 'https://www.majordomo.la/',
      image: 'https://images.otstatic.com/prod/25246909/1/huge.jpg',
      contributor: 'TheDude',
      contributorId: '63609faae02994d53035a14f'
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
      image: 'https://images.otstatic.com/prod/25161630/1/huge.jpg',
      contributor: 'Scully',
      contributorId: '63609faae02994d53035a150'
    },
    {
      rname: 'Committee',
      cuisine: 'Mediterrenean',
      city: 'Boston',
      address: '50 Northern Ave, Boston, MA 02210',
      eventType: 'Client Dinner',
      breakfast: false,
      lunch: true,
      dinner: true,
      notes: 'Seaport',
      website: 'https://committeeboston.com',
      image: 'https://images.otstatic.com/prod/24910658/1/huge.jpg',
      contributor: 'TheDude',
      contributorId: '63609faae02994d53035a14f'
    },
    {
      rname: 'RedFarm',
      cuisine: 'Chinese(Farm-Style)',
      city: 'Boston',
      address: '529 Hudston Street, btwn 10th & Charles St. (West Village)',
      eventType: 'Client Dinner',
      breakfast: false,
      lunch: false,
      dinner: true,
      notes: 'ABoss fave spot - Additional location: Upper West Side',
      website: 'https://www.redfarmnyc.com',
      image: 'https://images.otstatic.com/prod/26799950/3/huge.jpg',
      contributor: 'TheDude',
      contributorId: '63609faae02994d53035a150'
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
