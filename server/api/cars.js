const router = require('express').Router()
const {Car} = require('../db/models')

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

router.post('/', async (req, res, next) => {
  try {
    const car = await Car.create(req.body)
    res.json(car)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await Car.destroy({
      where: {id: req.params.id}
    })
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  console.log('did we make it to the API routes?')
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
