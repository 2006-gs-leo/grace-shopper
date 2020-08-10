const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  userEmail: {
    type: Sequelize.STRING
  },
  data: {
    type: Sequelize.TEXT // if we're doing the whole cart data
  }
})

module.exports = Cart
