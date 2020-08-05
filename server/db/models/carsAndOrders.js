const Sequelize = require('sequelize')
const db = require('../db')
const {Car, Order} = require('../models')

const CarsAndOrders = db.define('carsAndOrders', {
  carId: {
    type: Sequelize.INTEGER,
    references: {
      model: Car,
      key: 'id'
    }
  },
  orderId: {
    type: Sequelize.INTEGER,
    references: {
      model: Order, // 'Actors' would also work
      key: 'id'
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = CarsAndOrders
