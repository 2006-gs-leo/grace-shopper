const router = require('express').Router()
const {User, Car, Order} = require('../db/models')
const CarsAndOrders = require('../db/models/carsAndOrders')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)

    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId/orders', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {userId: req.params.userId},
      include: Car
    })

    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.post('/:userId/orders', async (req, res, next) => {
  try {
    const findOrderUser = Order.findOne({
      where: {userId: req.params.userId}
    })
    req.body.orderId = findOrderUser.orderId

    const createdOrder = await CarsAndOrders.create(req.body)

    res.json(createdOrder)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)

    await User.destroy({
      where: {
        id: req.params.id
      },
      returning: true
    })

    res.json(user)
  } catch (err) {
    next(err)
  }
})
