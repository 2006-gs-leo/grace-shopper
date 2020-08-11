const router = require('express').Router()
const {Car} = require('../db/models')

// want to make 403 forbidden page
const usersOnly = (req, res, next) => {
  if (!req.user) {
    // if req.user is undefined.  Clear cookies to log out and test this one.
    const err = new Error('you need to log in to do this!')
    err.status = 401
    return next(err)
  } else {
    next()
  }
}

const adminsOnly = (req, res, next) => {
  let {
    id,
    firstName,
    lastName,
    email,
    password,
    image,
    isAdmin
  } = req.user.dataValues
  if (id && firstName && lastName && email && password && image) {
    if (!isAdmin) {
      const err = new Error("you're logged in, but you're not an admin!")
      err.status = 401
      return next(err)
    } else {
      next()
    }
  } else {
    const err = new Error('you need to log in as an admin to do this!')
    err.status = 401
    return next(err)
  }
}

router.get('/', async (req, res, next) => {
  try {
    const cars = await Car.findAll()
    res.json(cars)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const car = await Car.findByPk(req.params.id)
    res.json(car)
  } catch (err) {
    next(err)
  }
})

router.post('/', usersOnly, async (req, res, next) => {
  try {
    const car = await Car.create(req.body)
    res.json(car)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', usersOnly, adminsOnly, async (req, res, next) => {
  try {
    await Car.destroy({
      where: {id: req.params.id}
    })
  } catch (err) {
    next(err)
  }
})

router.put('/:id', usersOnly, adminsOnly, async (req, res, next) => {
  try {
    const [numAffected, affectedRows] = await Car.update(req.body, {
      where: {id: req.params.id},
      returning: true
    })
    res.json(affectedRows)
  } catch (err) {
    next(err)
  }
})

module.exports = router
