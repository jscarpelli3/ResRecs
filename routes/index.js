const { Router } = require('express')
const controllers = require('../controllers/index.js')
const router = Router()

router.get('/', (req, res) => res.send('This is api root!'))

router.get('/main', controllers.getAll)
router.get('/restaurants/:id', controllers.getRestById)
router.put('/restaurants/:id', controllers.updateRest)
router.delete('/restaurants/:id', controllers.deleteRest)
router.get('/restaurants/comments', controllers.getCommentsByRest)
router.post('/newrestaurant', controllers.createRestaurant)

router.get('/restaurants/alpha', controllers.getAllRestaurantsAlpha)
router.get('/restaurants', controllers.getAllRestaurantsCity)

router.get('/users', controllers.getAllUsers)
router.get('/users/:id', controllers.getUserById)
router.get('/users/one', controllers.getUser)

router.post('/comment', controllers.makeComment)
router.delete('/comment/:id', controllers.deleteComment)
router.get('/comment/:id', controllers.getCommentsByRest)

module.exports = router
