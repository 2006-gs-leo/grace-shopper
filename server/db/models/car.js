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
  cylinderCount: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isIn: [
        [
          'all',
          '4-cylinder',
          '5-cylinder',
          '6-cylinder',
          '8-cylinder',
          '10-cylinder',
          '12-cylinder'
        ]
      ]
    }
  },
  mpg: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  exteriorColor: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isIn: [
        [
          'Beige',
          'Black',
          'Blue',
          'Brown',
          'Gold',
          'Gray',
          'Green',
          'Orange',
          'Pink',
          'Purple',
          'Red',
          'Silver',
          'White',
          'Yellow',
          'Other'
        ]
      ]
    }
  },
  interiorColor: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isIn: [
        [
          'Beige',
          'Black',
          'Blue',
          'Brown',
          'Gold',
          'Gray',
          'Green',
          'Orange',
          'Pink',
          'Purple',
          'Red',
          'Silver',
          'White',
          'Yellow',
          'Other'
        ]
      ]
    }
  },
  transmission: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isIn: [['manual', 'automatic']]
    }
  },
  drivetrain: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isIn: [['awd', 'rwd', 'fwd', '4wd']]
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
