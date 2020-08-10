import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */

const userOwnedCars = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  }
]

export const UserHome = props => {
  // const [user, setUser] = useState({ user: [] });
  const {email, user} = props

  return (
    <div>
      <div className="userProfilecard">
        <h3>Welcome, {email}</h3>
        <img src="JDBCARS_LOGO.png" alt="John" />
        <h1>user.name</h1>
        <p className="userProfiletitle">user.something</p>
        <p>user.CarsOwned</p>
        {userOwnedCars.map(car => (
          <div key={car.id} className="singleCarDiv">
            <h5>Make: {car.make}</h5>
            <h4>Model: {car.model}</h4>
            <h4>Year: {car.vehicleYear}</h4>
            <h4>price: {car.price}</h4>
          </div>
        ))}
        <a href="#">
          <i className="fa fa-dribbble" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <p>
          <button type="button">user.Contact</button>
        </p>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
