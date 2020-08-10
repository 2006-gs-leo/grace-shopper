const Sequelize = require('sequelize')
const User = require('./user')
const Car = require('./car')
const Order = require('./order')
const CarsAndOrders = require('./carsAndOrders')
const Cart = require('./cart')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

//Many To Many - Cars/Orders
Car.belongsToMany(Order, {through: CarsAndOrders})
Order.belongsToMany(Car, {through: CarsAndOrders})

//One To Many - User/Order
User.hasMany(Order)
Order.belongsTo(User)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Car,
  Order,
  CarsAndOrders,
  Cart
}
