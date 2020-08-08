import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCars} from '../store/cars'
import {NavLink} from 'react-router-dom'
import {Nav} from 'react-bootstrap'

export class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchCars()
    console.log('The main page component is mounted!')
  }

  render() {
    const cars = this.props.cars

    return (
      <div>
        <br />
        <br />
        <br />
        <select name="cars" className="select-css">
          <option value="Price">Price</option>
          <option value="Make">Make</option>
          <option value="Model">Model</option>
          <option value="Date_Added">Date Added</option>
          <option value="Average_Rating">Average Rating</option>
        </select>
        <input className="mainInput" type="text" placeholder="Search.." />

        <div className="carList">
          {cars.length > 0 ? (
            cars.map(car => {
              return (
                <div key={car.id} className="carListItem">
                  <NavLink to={`/cars/${car.id}`}>
                    <div>
                      <img
                        className="carImg"
                        src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      />
                    </div>
                    <div>
                      <p>
                        {car.vehicleYear} {car.make} {car.model}
                      </p>
                      <p>${car.price}</p>
                      <p>Quantity: {car.quantity}</p>
                    </div>
                  </NavLink>
                </div>
              )
            })
          ) : (
            <h1>No Cars Available</h1>
          )}
        </div>

        <div id="footer">
          <Link to="/about" className="footer">
            About Us
          </Link>
          |
          <Link to="/contact" className="footer">
            Contact
          </Link>
        </div>
      </div>
    )
  }
}

const mapState = reduxState => {
  return {
    cars: reduxState.cars
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCars: () => dispatch(fetchCars())
  }
}

export default connect(mapState, mapDispatch)(MainPage)
