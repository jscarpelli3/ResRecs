const Restaurants = require('../models/restaurant')
const User = require('../models/user')

const getAllRestaurantsAlpha = async (req, res) => {
  try {
    const rests = await Restaurants.find()
    rests.sort((name1, name2) => {
      const nm1 = name1.rname.toUpperCase()
      const nm2 = name2.rname.toUpperCase()
      if (nm1 < nm2) {
        return -1
      } else if (nm1 > nm2) {
        return 1
      } else {
        return 0
      }
    })
    return res.status(200).json({ rests })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAll = async (req, res) => {
  try {
    const rests = await Restaurants.find()
    return res.status(200).json({ rests })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getAllRestaurantsCity = async (req, res) => {
  try {
    const rests = []
    const searched = req.query.city
    const upRest = await Restaurants.find()
    upRest.forEach((rest) => {
      if (rest.city.toUpperCase() === searched.toUpperCase()) {
        rests.push(rest)
      }
    })
    return res.status(200).json({ rests })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createRestaurant = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUser = async (req, res) => {
  try {
    const curUser = {}
    const searched = req.query.user
    const upUser = await Users.find()
    upUser.forEach((use) => {
      if (use.username.toUpperCase() === searched.toUpperCase()) {
        curUser = use
      }
    })

    return res.status(200).json({ curUser })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllRestaurantsAlpha,
  getAll,
  getAllRestaurantsCity,
  createRestaurant,
  getAllUsers,
  getUser
}
