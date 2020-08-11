import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCars} from '../store/cars'

export class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: this.props.cars // initial value before sorting
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    this.props.fetchCars()
  }

  handleChange(e) {
    let selectedOption = e.target.value
    this.setState({
      // re-renders after changing state
      cars: this.props.cars.sort((a, b) =>
        a[selectedOption] > b[selectedOption] ? 1 : -1
      )
    })
  }

  handleSearch(e) {
    let searchValue = e.target.value
    this.setState({
      // re-renders after changing state
      cars: this.props.cars.filter(element => {
        return element.make === searchValue
      })
    })
  }

  render() {
    // initially in this react lifecycle, this.state.cars doesn't exist
    let cars = this.state.cars
    const imageList = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiK4LqjrlJd1zvQeDAVUeAWCS2DvDYJNQVEA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWzXSd6DsiN56BYkDMbrqyFtE6E7wSnnQB4g&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSv1c_369ipGE11_UQYGKy0-Zxa6-BqCRR_AA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsb8A181AO7-9Ph8aKGgqGZ_TSSCApx1J0Rg&usqp=CAU',
      'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/bugatti-chiron_0.jpg?itok=VIJ83UQt',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3sk2CfSsAv_WHqnnCErpgSPynOBLMUDSGcQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWDo6QSrxSZn1_PVHHaqyBJLEH2ZyDfEMNSw&usqp=CAU',
      'https://www.generatormix.com/images/cars/brooke.jpg',
      'https://www.generatormix.com/images/cars/mazda.jpg',
      'https://www.generatormix.com/images/cars/landrover.jpg'
    ]

    return (
      <div>
        <br />
        <br />
        <br />
        <select
          defaultValue="make"
          name="cars"
          className="select-css"
          onChange={this.handleChange}
        >
          <option value="" disabled selected>
            Select an option
          </option>
          <option value="cylinderCount">Cylinder Count</option>
          <option value="drivetrain">Drive Train</option>
          <option value="exteriorColor">Exterior Color</option>
          <option value="id">ID</option>
          <option value="interiorColor">Interior Color</option>
          <option value="make">Make</option>
          <option value="model">Model</option>
          <option value="mpg">MPG</option>
          <option value="price">Price</option>
          <option value="quantity">Quantity</option>
          <option value="transmission">Transmission</option>
          <option value="vehicleYear">Vehicle Year</option>
        </select>
        <input
          className="mainInput"
          type="text"
          placeholder="Search by make.."
          onChange={this.handleSearch}
        />

        <div className="carList">
          {cars.length > 0 ? (
            cars.map(car => {
              return (
                <div key={car.id} className="carListItem">
                  <NavLink to={`/cars/${car.id}`}>
                    <div>
                      <img
                        className="carImg"
                        src={imageList[Math.floor(Math.random() * 10)]}
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
            <h1>No Cars with the Criteria Available</h1>
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
