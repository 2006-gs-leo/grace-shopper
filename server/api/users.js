const router = require('express').Router()
const {User, Car, Order} = require('../db/models')
module.exports = router

const usersOnly = (req, res, next) => {
  if (!req.user) {
    // if req.user is undefined.  Clear cookies to log out and test this one.
    const err = new Error('you need to log in as an admin to do this!')
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

router.delete('/:id', usersOnly, adminsOnly, async (req, res, next) => {
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
