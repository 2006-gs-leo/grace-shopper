const router = require('express').Router()
const {Car} = require('../db/models')
const {route} = require('../auth')

router.get('/', async (req, res, next) => {
  try {
    const cars = await Car.findAll()

    res.json(cars)
  } catch (err) {
    next(err)
  }
})

module.exports = router
