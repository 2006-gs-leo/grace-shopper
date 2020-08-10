const router = require('express').Router()
const {Car, CarsAndOrders, Order, Users, Cart} = require('../db/models')

module.exports = router

// change the qty in the cart
router.put('/edit', async (req, res, next) => {
  try {
    const {itemId, itemQty} = req.body

    //now check to see if there is a user id from the current user
  } catch (error) {
    next(error)
  }
})

router.delete('/edit', async (req, res, next) => {
  try {
    const {itemId, itemQty} = req.body

    //now check to see if there is a user id from the current user
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    console.log('within the post route, the req.body is ', req.body)
    console.log(Object.keys(req.body)[0], Object.values(req.body)[0])
    const newCart = await Cart.create({
      userEmail: Object.keys(req.body)[0],
      data: Object.values(req.body)[0]
    })
    res.json(newCart)
  } catch (error) {
    next(error)
  }
})
