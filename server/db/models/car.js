const Sequelize = require('sequelize')
const db = require('../db')

const Car = db.define('car', {
  make: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  vehicleYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  zipCode: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  startDate: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true,
      isDate: true
    }
  },
  endDate: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true,
      isDate: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 1
    }
  }
})

module.exports = Car
