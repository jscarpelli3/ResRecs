const { Router } = require('express')
const controllers = require('../controllers/index.js')
const router = Router()

router.get('/', (req, res) => res.send('This is api root!'))

router.get('/main', controllers.getAll)

router.get('/restaurants/:id', controllers.getRestById)

// router.get('/restaurants', controllers.getAllRestaurantsAlpha)

router.get('/restaurants', controllers.getAllRestaurantsCity)

router.post('/newrestaurant', controllers.createRestaurant)

router.get('/users', controllers.getAllUsers)

router.get('/users/:id', controllers.getUserById)

router.get('/users', controllers.getUser)

router.post('/postComment', controllers.makeComment)

module.exports = router
