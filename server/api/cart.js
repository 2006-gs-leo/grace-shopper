const router = require('express').Router()
const {Car, CarsAndOrders, Order, Users} = require('../db/models')

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
