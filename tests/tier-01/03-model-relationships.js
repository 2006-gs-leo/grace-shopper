const {expect} = require('chai')
const {db} = require('../../server/db')
const seed = require('../../seed')
const {Car, User} = require('../../server/db')

describe('Tier One: User >- Cars Association', () => {
  before(() => db.sync({force: true}))
  afterEach(() => db.sync({force: true}))

  describe('Sequelize Models', () => {
    let user1, car1, car2
    beforeEach(async () => {
      car1 = await Car.create({
        id: 1,
        make: 'Mercedes',
        model: 'AMG C63 Coupe',
        vehicleYear: 2020,
        description:
          '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
        price: 73345,
        cylinderCount: '8-cylinder',
        mpg: 20,
        exteriorColor: 'Black',
        interiorColor: 'Red',
        transmission: 'automatic',
        drivetrain: 'rwd',
        quantity: 3
      })
      car2 = await Car.create({
        id: 2,
        make: 'Honda',
        model: 'Civic Si Sedan',
        vehicleYear: 2020,
        description:
          '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
        price: 26155,
        cylinderCount: '4-cylinder',
        mpg: 31,
        exteriorColor: 'Blue',
        interiorColor: 'Black',
        transmission: 'manual',
        drivetrain: 'fwd',
        quantity: 2
      })
      user1 = await User.create({
        firstName: 'Sally',
        lastName: 'Ride',
        email: 'sallyride@nasa.gov',
        carId: [car1.id, car2.id]
      })
    })
    afterEach(() => db.sync({force: true}))

    it('a car may be assigned to at most one user', async () => {
      const sallysCar = await user1.getCar()
      expect(sallysCar.model).to.equal(car1.model)
    })

    it('a user may have many cars', async () => {
      const result = await user1.hasCars([car1, car2])
      expect(result).to.be.equal(true)
    })
  })

  describe('Seed File', () => {
    let user, cars
    beforeEach(async () => {
      await seed()
      user = await User.findAll({include: [Car]})
      cars = await Car.findAll({include: [User]})
    })

    it('creates at least one campus that has several students', () => {
      const usersWithSeveralCars = users
        .filter(user => user.cars.length > 1)
        .map(user => user.name)
      expect(usersWithSeveralCars).to.have.lengthOf.above(0)
    })

    it('creates at least one car that is not assigned to a user', () => {
      const carsWithNoUser = cars.filter(car => !car.user).map(car => car)
      expect(carsWithNoUser).to.have.lengthOf.above(0)
    })
  })
})
