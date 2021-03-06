const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/cars', require('./cars'))
router.use('/cart', require('./cart'))

router.use((req, res, next) => {
  console.log('Who am I?')
  console.log(req.user)
  next()
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
