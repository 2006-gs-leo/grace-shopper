const router = require('express').Router()
const {Car, CarsAndOrders, Order, Users, Cart} = require('../db/models')

module.exports = router

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

// change the qty in the cart
router.put('/edit', usersOnly, async (req, res, next) => {
  try {
    const {itemId, itemQty} = req.body

    //now check to see if there is a user id from the current user
  } catch (error) {
    next(error)
  }
})

router.delete('/edit', usersOnly, async (req, res, next) => {
  try {
    const {itemId, itemQty} = req.body

    //now check to see if there is a user id from the current user
  } catch (error) {
    next(error)
  }
})

router.post('/', usersOnly, async (req, res, next) => {
  try {
    const newCart = await Cart.create({
      userEmail: Object.keys(req.body)[0],
      data: Object.values(req.body)[0]
    })
    res.json(newCart)
  } catch (error) {
    next(error)
  }
})
