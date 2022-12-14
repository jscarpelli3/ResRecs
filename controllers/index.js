const Restaurants = require('../models/restaurant')
const User = require('../models/user')
const Comments = require('../models/comment')

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

const getRestById = async (req, res) => {
  try {
    const { id } = req.params
    const rest = await Restaurants.findById(id)
    return res.status(200).json(rest)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createRestaurant = async (req, res) => {
  try {
    const newRest = await new Restaurants(req.body)
    await newRest.save()
    return res.status(201).json({
      newRest
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteRest = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Restaurants.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Restaurant deleted')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateRest = async (req, res) => {
  try {
    const rest = await Restaurants.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(rest)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUser = async (req, res) => {
  try {
    const curUser = {}
    const searched = req.query.user
    const upUser = await User.find()
    upUser.forEach((use) => {
      if (use.username.toUpperCase() === searched.toUpperCase()) {
        curUser = use
      }
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const validateUser = async (req, res) => {
  try {
    const upUser = await User.find({ username: req.params.user })
    return res.status(200).json({ upUser })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    return res.status(200).json({ user })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const makeComment = async (req, res) => {
  try {
    const newCom = await new Comments(req.body)
    await newCom.save()
    return res.status(201).json({ newCom })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCommentsByRest = async (req, res) => {
  try {
    const { id } = req.params
    const comments = await Comments.find({ rest: id })
    return res.status(200).json({ comments })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getCommentsByUser = async (req, res) => {
  try {
    const userComs = await Comments.find({ user: req.query.user.username })
    if (userComs) {
      return res.status(200).json({ useComs })
    }
    return res.status(404).send('No comments by that User')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comments.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comment deleted')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAll,
  getAllRestaurantsAlpha,
  getAllRestaurantsCity,
  getRestById,
  createRestaurant,
  getAllUsers,
  validateUser,
  getUserById,
  getUser,
  makeComment,
  getCommentsByUser,
  getCommentsByRest,
  deleteComment,
  deleteRest,
  updateRest
}
