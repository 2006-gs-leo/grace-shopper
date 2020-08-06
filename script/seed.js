'use strict'

const db = require('../server/db')
const {User, Car} = require('../server/db/models')
const faker = require('faker')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  for (let i = 0; i < 100; i++) {
    await User.create({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      image: faker.image.imageUrl()
    })
  }

  console.log(`seeded 100 users`)
  console.log(`seeded successfully`)

  const cars = await Promise.all([
    Car.create({
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
    }),
    Car.create({
      make: 'Honda',
      model: 'Civic Si Coupe',
      vehicleYear: 2020,
      description:
        'Modern Steel 2020 Honda Civic Si FWD 6-Speed Manual 1.5L I4 DOHC 16VAs the most aggressive New Car dealer in Northeastern Ohio, our prices stand out among the competition !!! This Honda also qualifies for exclusive College Grad Program, College Grad down payment assistance, Military appreciation program. Please see dealer for important details and eligibility.In uncertain times, one thing is certain -- Honda of Mentor is here for you! *Council of Excellence Winner. *90 Day Sirius/XM Satellite Radio Trial with all properly equipped cars. *BBB A+ Accredited Business. *New State-of-the-Art Dealership *Extended sales and service hours *Courtesy Shuttle, Cable TV, Wi-Fi, - This 2020 Honda Civic Si Coupe 2dr Manual features a 1.5L 4 CYLINDER 4cyl Gasoline engine. It is equipped with a 6 Speed Manual transmission. The vehicle is Modern Steel with a Blk Clth interior. It is offered with a full factory warranty. - Air Conditioning, Climate Control, Dual Zone Climate Control, Cruise Control, Power Steering, Power Windows, Power Mirrors, Leather Steering Wheel, Leather Shifter, Memory Seat Position, Clock, Tachometer, Digital Info Center, Tilt Steering Wheel, Telescoping Steering Wheel, Steering Wheel Radio Controls, Sunroof, Moonroof, Driver Airbag, Passenger Airbag, Side Airbags, Keyless Entry, Security System, ABS Brakes, Traction Control, Dynamic Stability, Rear Defogger, Fog Lights, Intermittent Wipers, AM/FM, Alloy Wheels, Heated Front Bucket Seats, Cloth Seat Trim, Radio: 450-Watt Premium Audio System with 10 Speakers, 4-Wheel Disc Brakes, Front Bucket Seats, Front Center Armrest, Spoiler, Automatic temperature control, Brake assist, Bumpers: body-color, Delay-off headlights, Driver door bin, Driver vanity mirror, Dual front impact airbags, Dual front side impact airbags, Four wheel independent suspension, Front anti-roll bar, Front reading lights, Fully automatic headlights, Heated door mirrors, Heated front seats, Illuminated entry, Low tire pressure warnin ...',
      price: 26155,
      cylinderCount: '4-cylinder',
      mpg: 31,
      exteriorColor: 'Gray',
      interiorColor: 'Black',
      transmission: 'manual',
      drivetrain: 'fwd',
      quantity: 3
    }),
    Car.create({
      make: 'Honda',
      model: 'Accord EX-L',
      vehicleYear: 2020,
      description:
        'modern steel metallic 2020 Honda Accord EX-L FWD CVT 1.5T I4 DOHC 16V Turbocharged VTEC *Priced to Sell Fast*, *No Haggle/No Hassle Pricing*, 10 Speakers, 4-Wheel Disc Brakes, ABS brakes, Air Conditioning, Alloy wheels, AM/FM radio: SiriusXM, Apple CarPlay/Android Auto, Auto High-beam Headlights, Auto-dimming Rear-View mirror, Automatic temperature control, Brake assist, Bumpers: body-color, Delay-off headlights, Distance pacing cruise control: Adaptive Cruise Control (ACC) with Low-Speed Follow, Driver door bin, Driver vanity mirror, Dual front impact airbags, Dual front side impact airbags, Electronic Stability Control, Emergency communication system: HondaLink, Exterior Parking Camera Rear, Four wheel independent suspension, Front anti-roll bar, Front Bucket Seats, Front Center Armrest, Front dual zone A/C, Front fog lights, Front reading lights, Fully automatic headlights, Garage door transmitter: HomeLink, Heated door mirrors, Heated Front Bucket Seats, Heated front seats, Illuminated entry, Knee airbag, Leather Shift Knob, Leather steering wheel, Leather-Trimmed Seats, Low tire pressure warning, Memory seat, Occupant sensing airbag, Outside temperature display, Overhead airbag, Overhead console, Panic alarm, Passenger door bin, Passenger vanity mirror, Power door mirrors, Power driver seat, Power moonroof, Power passenger seat, Power steering, Power windows, Radio data system, Radio: 450-Watt AM/FM/HD Premium Audio System, Rear anti-roll bar, Rear seat center armrest, Rear window defroster, Remote keyless entry, Security system, Speed control, Speed-sensing steeri Napleton Family Owned and Operated Since 1931. We will treat you like family. Visit our dealership and see for yourself our lineup of new Honda models available.',
      price: 28914,
      cylinderCount: '4-cylinder',
      mpg: 34,
      exteriorColor: 'Gray',
      interiorColor: 'Gray',
      transmission: 'automatic',
      drivetrain: 'fwd',
      quantity: 4
    }),
    Car.create({
      make: 'Honda',
      model: 'CR-V LX',
      vehicleYear: 2020,
      title: 'Honda CR-V LX',
      description:
        '- Radiant Red 2020 Honda CR-V LX AWD CVT 1.5L I4 DOHC 16VAs the most aggressive New Car dealer in Northeastern Ohio, our prices stand out among the competition !!! This Honda also qualifies for exclusive College Grad Program, College Grad down payment assistance, Military appreciation program. Please see dealer for important details and eligibility.In uncertain times, one thing is certain -- Honda of Mentor is here for you! *Council of Excellence Winner. *90 Day Sirius/XM Satellite Radio Trial with all properly equipped cars. *BBB A+ Accredited Business. *New State-of-the-Art Dealership *Extended sales and service hours *Courtesy Shuttle, Cable TV, Wi-Fi, - This 2020 Honda CR-V 4dr LX features a 1.5L 4 CYLINDER 4cyl Gasoline engine. It is equipped with a Continuously Variable transmission. The vehicle is Radiant Red Metallic with a Gray interior. It is offered with a full factory warranty. - Air Conditioning, Climate Control, Power Steering, Power Mirrors, Clock, Tachometer, Telescoping Steering Wheel, Steering Wheel Radio Controls, Driver Airbag, Passenger Airbag, Side Airbags, Keyless Entry, Rear Defogger, Intermittent Wipers, Anti-Theft, Carpeted Floor Mats, Center Arm Rest, Child Proof Door Locks, Daytime Running Lights, Overhead Console, Premium Sound, Rear Spoiler, Rear Spoiler, Rear Wipers, Remote Fuel Door, Reverse Camera, Roll Stability Control, Side Curtain Airbags, Sliding Rear Window, Tire Pressure Monitor, Vanity Mirrors -',
      price: 27645,
      cylinderCount: '4-cylinder',
      mpg: 31,
      exteriorColor: 'Red',
      interiorColor: 'Black',
      transmission: 'automatic',
      drivetrain: 'fwd',
      quantity: 2
    }),
    Car.create({
      make: 'Toyota',
      model: 'Camry XSE V6',
      title: 'Toyota Camry XSE V6',
      vehicleYear: 2019,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 35460,
      cylinderCount: '6-cylinder',
      mpg: 30,
      exteriorColor: 'White',
      interiorColor: 'Red',
      transmission: 'automatic',
      drivetrain: 'fwd',
      quantity: 8
    }),
    Car.create({
      make: 'Lexus',
      model: 'IS 350 F Sport',
      vehicleYear: 2020,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 26155,
      cylinderCount: '6-cylinder',
      mpg: 27,
      exteriorColor: 'Blue',
      interiorColor: 'Black',
      transmission: 'automatic',
      drivetrain: 'awd',
      quantity: 5
    }),
    Car.create({
      make: 'Lexus',
      model: 'RC 350 F Sport',
      vehicleYear: 2020,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 51890,
      cylinderCount: '6-cylinder',
      mpg: 28,
      exteriorColor: 'Black',
      interiorColor: 'Red',
      transmission: 'automatic',
      drivetrain: 'awd',
      quantity: 1
    }),
    Car.create({
      make: 'BMW',
      model: 'M3 Competition Pkg',
      vehicleYear: 2018,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 68320,
      cylinderCount: '6-cylinder',
      mpg: 23,
      exteriorColor: 'Blue',
      interiorColor: 'Black',
      transmission: 'manual',
      drivetrain: 'rwd',
      quantity: 2
    }),
    Car.create({
      make: 'BMW',
      model: 'M2 Competition',
      vehicleYear: 2021,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 61237,
      cylinderCount: '6-cylinder',
      mpg: 23,
      exteriorColor: 'Black',
      interiorColor: 'Black',
      transmission: 'manual',
      drivetrain: 'rwd',
      quantity: 2
    }),
    Car.create({
      make: 'Mercedes',
      model: 'AMG C43 Coupe',
      vehicleYear: 2020,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 63593,
      cylinderCount: '6-cylinder',
      mpg: 25,
      exteriorColor: 'Black',
      interiorColor: 'Black',
      transmission: 'automatic',
      drivetrain: 'awd',
      quantity: 2
    }),
    Car.create({
      make: 'Mercedes',
      model: 'AMG C43 Sedan',
      vehicleYear: 2020,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 60380,
      cylinderCount: '6-cylinder',
      mpg: 25,
      exteriorColor: 'Black',
      interiorColor: 'Black',
      transmission: 'automatic',
      drivetrain: 'awd',
      quantity: 2
    }),
    Car.create({
      make: 'Mercedes',
      model: 'AMG C63 Sedan',
      vehicleYear: 2020,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 71345,
      cylinderCount: '8-cylinder',
      mpg: 20,
      exteriorColor: 'White',
      interiorColor: 'Red',
      transmission: 'automatic',
      drivetrain: 'rwd',
      quantity: 3
    }),
    Car.create({
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
    }),
    Car.create({
      make: 'Subaru',
      model: 'WRX STI',
      vehicleYear: 2020,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 38190,
      cylinderCount: '4-cylinder',
      mpg: 27,
      exteriorColor: 'Blue',
      interiorColor: 'Black',
      transmission: 'manual',
      drivetrain: 'awd',
      quantity: 4
    }),
    Car.create({
      make: 'Subaru',
      model: 'WRX STI Limited',
      vehicleYear: 2020,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 41330,
      cylinderCount: '4-cylinder',
      mpg: 27,
      exteriorColor: 'Red',
      interiorColor: 'Black',
      transmission: 'manual',
      drivetrain: 'awd',
      quantity: 4
    }),
    Car.create({
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
    }),
    Car.create({
      make: 'Honda',
      model: 'Civic Si Coupe',
      vehicleYear: 2020,
      description:
        'Modern Steel 2020 Honda Civic Si FWD 6-Speed Manual 1.5L I4 DOHC 16VAs the most aggressive New Car dealer in Northeastern Ohio, our prices stand out among the competition !!! This Honda also qualifies for exclusive College Grad Program, College Grad down payment assistance, Military appreciation program. Please see dealer for important details and eligibility.In uncertain times, one thing is certain -- Honda of Mentor is here for you! *Council of Excellence Winner. *90 Day Sirius/XM Satellite Radio Trial with all properly equipped cars. *BBB A+ Accredited Business. *New State-of-the-Art Dealership *Extended sales and service hours *Courtesy Shuttle, Cable TV, Wi-Fi, - This 2020 Honda Civic Si Coupe 2dr Manual features a 1.5L 4 CYLINDER 4cyl Gasoline engine. It is equipped with a 6 Speed Manual transmission. The vehicle is Modern Steel with a Blk Clth interior. It is offered with a full factory warranty. - Air Conditioning, Climate Control, Dual Zone Climate Control, Cruise Control, Power Steering, Power Windows, Power Mirrors, Leather Steering Wheel, Leather Shifter, Memory Seat Position, Clock, Tachometer, Digital Info Center, Tilt Steering Wheel, Telescoping Steering Wheel, Steering Wheel Radio Controls, Sunroof, Moonroof, Driver Airbag, Passenger Airbag, Side Airbags, Keyless Entry, Security System, ABS Brakes, Traction Control, Dynamic Stability, Rear Defogger, Fog Lights, Intermittent Wipers, AM/FM, Alloy Wheels, Heated Front Bucket Seats, Cloth Seat Trim, Radio: 450-Watt Premium Audio System with 10 Speakers, 4-Wheel Disc Brakes, Front Bucket Seats, Front Center Armrest, Spoiler, Automatic temperature control, Brake assist, Bumpers: body-color, Delay-off headlights, Driver door bin, Driver vanity mirror, Dual front impact airbags, Dual front side impact airbags, Four wheel independent suspension, Front anti-roll bar, Front reading lights, Fully automatic headlights, Heated door mirrors, Heated front seats, Illuminated entry, Low tire pressure warnin ...',
      price: 26155,
      cylinderCount: '4-cylinder',
      mpg: 31,
      exteriorColor: 'Gray',
      interiorColor: 'Black',
      transmission: 'manual',
      drivetrain: 'fwd',
      quantity: 3
    }),
    Car.create({
      make: 'Honda',
      model: 'Accord EX-L',
      vehicleYear: 2020,
      description:
        'modern steel metallic 2020 Honda Accord EX-L FWD CVT 1.5T I4 DOHC 16V Turbocharged VTEC *Priced to Sell Fast*, *No Haggle/No Hassle Pricing*, 10 Speakers, 4-Wheel Disc Brakes, ABS brakes, Air Conditioning, Alloy wheels, AM/FM radio: SiriusXM, Apple CarPlay/Android Auto, Auto High-beam Headlights, Auto-dimming Rear-View mirror, Automatic temperature control, Brake assist, Bumpers: body-color, Delay-off headlights, Distance pacing cruise control: Adaptive Cruise Control (ACC) with Low-Speed Follow, Driver door bin, Driver vanity mirror, Dual front impact airbags, Dual front side impact airbags, Electronic Stability Control, Emergency communication system: HondaLink, Exterior Parking Camera Rear, Four wheel independent suspension, Front anti-roll bar, Front Bucket Seats, Front Center Armrest, Front dual zone A/C, Front fog lights, Front reading lights, Fully automatic headlights, Garage door transmitter: HomeLink, Heated door mirrors, Heated Front Bucket Seats, Heated front seats, Illuminated entry, Knee airbag, Leather Shift Knob, Leather steering wheel, Leather-Trimmed Seats, Low tire pressure warning, Memory seat, Occupant sensing airbag, Outside temperature display, Overhead airbag, Overhead console, Panic alarm, Passenger door bin, Passenger vanity mirror, Power door mirrors, Power driver seat, Power moonroof, Power passenger seat, Power steering, Power windows, Radio data system, Radio: 450-Watt AM/FM/HD Premium Audio System, Rear anti-roll bar, Rear seat center armrest, Rear window defroster, Remote keyless entry, Security system, Speed control, Speed-sensing steeri Napleton Family Owned and Operated Since 1931. We will treat you like family. Visit our dealership and see for yourself our lineup of new Honda models available.',
      price: 28914,
      cylinderCount: '4-cylinder',
      mpg: 34,
      exteriorColor: 'Gray',
      interiorColor: 'Gray',
      transmission: 'automatic',
      drivetrain: 'fwd',
      quantity: 4
    }),
    Car.create({
      make: 'Honda',
      model: 'CR-V LX',
      vehicleYear: 2020,
      description:
        '- Radiant Red 2020 Honda CR-V LX AWD CVT 1.5L I4 DOHC 16VAs the most aggressive New Car dealer in Northeastern Ohio, our prices stand out among the competition !!! This Honda also qualifies for exclusive College Grad Program, College Grad down payment assistance, Military appreciation program. Please see dealer for important details and eligibility.In uncertain times, one thing is certain -- Honda of Mentor is here for you! *Council of Excellence Winner. *90 Day Sirius/XM Satellite Radio Trial with all properly equipped cars. *BBB A+ Accredited Business. *New State-of-the-Art Dealership *Extended sales and service hours *Courtesy Shuttle, Cable TV, Wi-Fi, - This 2020 Honda CR-V 4dr LX features a 1.5L 4 CYLINDER 4cyl Gasoline engine. It is equipped with a Continuously Variable transmission. The vehicle is Radiant Red Metallic with a Gray interior. It is offered with a full factory warranty. - Air Conditioning, Climate Control, Power Steering, Power Mirrors, Clock, Tachometer, Telescoping Steering Wheel, Steering Wheel Radio Controls, Driver Airbag, Passenger Airbag, Side Airbags, Keyless Entry, Rear Defogger, Intermittent Wipers, Anti-Theft, Carpeted Floor Mats, Center Arm Rest, Child Proof Door Locks, Daytime Running Lights, Overhead Console, Premium Sound, Rear Spoiler, Rear Spoiler, Rear Wipers, Remote Fuel Door, Reverse Camera, Roll Stability Control, Side Curtain Airbags, Sliding Rear Window, Tire Pressure Monitor, Vanity Mirrors -',
      price: 27645,
      cylinderCount: '4-cylinder',
      mpg: 31,
      exteriorColor: 'Red',
      interiorColor: 'Black',
      transmission: 'automatic',
      drivetrain: 'fwd',
      quantity: 2
    }),
    Car.create({
      make: 'Toyota',
      model: 'Camry XSE V6',
      vehicleYear: 2019,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 35460,
      cylinderCount: '6-cylinder',
      mpg: 30,
      exteriorColor: 'White',
      interiorColor: 'Red',
      transmission: 'automatic',
      drivetrain: 'fwd',
      quantity: 8
    }),
    Car.create({
      make: 'Lexus',
      model: 'IS 350 F Sport',
      vehicleYear: 2020,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 26155,
      cylinderCount: '6-cylinder',
      mpg: 27,
      exteriorColor: 'Blue',
      interiorColor: 'Black',
      transmission: 'automatic',
      drivetrain: 'awd',
      quantity: 5
    }),
    Car.create({
      make: 'Lexus',
      model: 'RC 350 F Sport',
      vehicleYear: 2020,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 51890,
      cylinderCount: '6-cylinder',
      mpg: 28,
      exteriorColor: 'Black',
      interiorColor: 'Red',
      transmission: 'automatic',
      drivetrain: 'awd',
      quantity: 1
    }),
    Car.create({
      make: 'BMW',
      model: 'M3 Competition Pkg',
      vehicleYear: 2018,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 68320,
      cylinderCount: '6-cylinder',
      mpg: 23,
      exteriorColor: 'Blue',
      interiorColor: 'Black',
      transmission: 'manual',
      drivetrain: 'rwd',
      quantity: 2
    }),
    Car.create({
      make: 'BMW',
      model: 'M2 Competition',
      vehicleYear: 2021,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 61237,
      cylinderCount: '6-cylinder',
      mpg: 23,
      exteriorColor: 'Black',
      interiorColor: 'Black',
      transmission: 'manual',
      drivetrain: 'rwd',
      quantity: 2
    }),
    Car.create({
      make: 'Mercedes',
      model: 'AMG C43 Coupe',
      vehicleYear: 2020,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 63593,
      cylinderCount: '6-cylinder',
      mpg: 25,
      exteriorColor: 'Black',
      interiorColor: 'Black',
      transmission: 'automatic',
      drivetrain: 'awd',
      quantity: 2
    }),
    Car.create({
      make: 'Mercedes',
      model: 'AMG C43 Sedan',
      vehicleYear: 2020,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 60380,
      cylinderCount: '6-cylinder',
      mpg: 25,
      exteriorColor: 'Black',
      interiorColor: 'Black',
      transmission: 'automatic',
      drivetrain: 'awd',
      quantity: 2
    }),
    Car.create({
      make: 'Mercedes',
      model: 'AMG C63 Sedan',
      vehicleYear: 2020,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 71345,
      cylinderCount: '8-cylinder',
      mpg: 20,
      exteriorColor: 'White',
      interiorColor: 'Red',
      transmission: 'automatic',
      drivetrain: 'rwd',
      quantity: 3
    }),
    Car.create({
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
    }),
    Car.create({
      make: 'Subaru',
      model: 'WRX STI',
      vehicleYear: 2020,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 38190,
      cylinderCount: '4-cylinder',
      mpg: 27,
      exteriorColor: 'Blue',
      interiorColor: 'Black',
      transmission: 'manual',
      drivetrain: 'awd',
      quantity: 4
    }),
    Car.create({
      make: 'Subaru',
      model: 'WRX STI Limited',
      vehicleYear: 2020,
      description:
        '2020 Honda Civic Si 1.5L I4 DOHC 16V Aegean Blue Metallic FWD 6-Speed Manual BLUETOOTH(R) CONNECTION FOR MOBILE PHONE, POWER SLIDING SUNROOF/MOONROOF, REAR BACK-UP CAMERA w/DISPLAY, SIRIUS XM SATELLITE RADIO, Automatic temperature control, Electronic Stability Control, Front dual zone A/C, Remote keyless entry, Steering wheel mounted audio controls. ~ RUSS DARROW GOLD CARD ($1,597 Value) INCLUDED WITH THIS VEHICLE! ~~ * 3 Oil Changes at no cost * PRIORITY Service Scheduling * BUY 4 Oil Changes, Get the 5th Oil Change at no cost * Complimentary Car Wash with Any Service * Complimentary 1-Day Rental with $400+ of Repairs or Maintenance * Complimentary Shuttle Service (Round Trip in Our Trade Area) * Complimentary Multi-Point Inspection with Any Service * AND MORE! Disclaimer (Tax, title, license, and service fees extra) Due to constantly changing market conditions our published live market prices are valid for 24 hours.',
      price: 41330,
      cylinderCount: '4-cylinder',
      mpg: 27,
      exteriorColor: 'Red',
      interiorColor: 'Black',
      transmission: 'manual',
      drivetrain: 'awd',
      quantity: 4
    })
  ])

  console.log(`seeded ${cars.length} cars`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
