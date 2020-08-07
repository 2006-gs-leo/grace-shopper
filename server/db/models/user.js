const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  image: {
    type: Sequelize.STRING,
    defaultValue:
      'https://vignette.wikia.nocookie.net/heroes-and-villians/images/4/43/IMG_0079.PNG/revision/latest/top-crop/width/360/height/450?cb=20171019170107'
  },
  password: {type: Sequelize.STRING}
})

module.exports = User
