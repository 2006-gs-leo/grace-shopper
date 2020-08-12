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
      // this.state.cars is a placeholder, we can sort this.props.cars!
      cars: this.props.cars.sort(
        (a, b) => (a[selectedOption] > b[selectedOption] ? 1 : -1)
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
    let cars = this.props.cars
    const imageList = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiK4LqjrlJd1zvQeDAVUeAWCS2DvDYJNQVEA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWzXSd6DsiN56BYkDMbrqyFtE6E7wSnnQB4g&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSv1c_369ipGE11_UQYGKy0-Zxa6-BqCRR_AA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsb8A181AO7-9Ph8aKGgqGZ_TSSCApx1J0Rg&usqp=CAU',
      'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/bugatti-chiron_0.jpg?itok=VIJ83UQt',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3sk2CfSsAv_WHqnnCErpgSPynOBLMUDSGcQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWDo6QSrxSZn1_PVHHaqyBJLEH2ZyDfEMNSw&usqp=CAU',
      'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg',
      'https://img.etimg.com/thumb/msid-61740239,width-1200,height-900,imgsize-251731,overlay-etpanache/photo.jpg',
      'https://www.jamesedition.com/stories/wp-content/uploads/2018/02/8f35ba26fe296e36b3a96ee5416259b4.jpg',
      'https://robbreportedit.files.wordpress.com/2020/01/1-1.jpg?w=1000',
      'https://media.wired.com/photos/5a989f644e7600696b557b96/master/w_2560%2Cc_limit/CarsRoundup-Porsche-TA.jpg',
      'https://www.autoguide.com/blog/wp-content/uploads/2018/01/lamborghini-aventador-s.jpg',
      'https://pv-magazine-usa.com/wp-content/uploads/sites/2/2019/10/FordEV-1200x800.jpeg',
      'https://media.spokesman.com/photos/2017/05/17/IMG_1462_t1200.jpg?298603a24e8d51915fce203907ff2746e482a5a6',
      'https://media.wired.com/photos/5bdcc059e5478b4e4ddc57b9/master/w_2560%2Cc_limit/ElectricCamaro-roundup-TA.jpg',
      'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/wheels/2017/08/04/-1/Movie-cars-cover-MAIN.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM4B9mI0ikIG4TRIlltgDwwTyRjAGRlzo5DQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9_Ow3uGtJ6xHFKtjAtYppCu5S_2RZuQ40JA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkPax40vQ80ao2y-VsB-ufdHytgLa9-Mw9vQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSt-ahm9fIPhiptTTrhakMOOt60acDjCT_6Hg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDxWeZ8h8V8egEUDkFFJWcbxu2x3_LE5Nwew&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKwsU1cPSGYiujGZPDV0oHHxoZmsYYId8yoA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNaBCvltUtGh-Zxc7zrIRxDk1N1YvsCJCRzQ&usqp=CAU',
      'https://www.smartmotorist.com/wp-content/uploads/2019/01/Types-Of-Cars-1-e1551691944710.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQORJx2hQYWFC6ZFf8qLxhjtVRtiyFbZmUWlw&usqp=CAU',
      'https://cdn.theatlantic.com/thumbor/ub4M4OkfqzjxuizvnKwYKC_j24M=/53x29:1229x690/720x405/media/img/mt/2017/07/maxresdefault/original.jpg',
      'https://i.insider.com/5bfc7d22f556fc09161734c7?width=600&format=jpeg&auto=webp',
      'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/flexslider_full/public/slideshow_image/01-mini-jpg.jpg?itok=Jax2TCWd',
      'https://di-uploads-pod14.dealerinspire.com/houseofcarsairdrie/uploads/2018/02/HOC_Web_Cover.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNxSEIxwcD60KrEiEVm0oTi4CDmoSmVe1SWg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSCbbzsJUTzkwvO0tw7nID0HHGkrZBD6bh4w&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYNZbNd_AbGf5G6U45mO9CmltPcD9gUZUh7Q&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhuvaMLfpdnT2aHRQ-JDTySQH4bKL1ARPAaQ&usqp=CAU',
      'https://yaleclimateconnections.org/pics/0819_electric_car.jpg'
    ]
    return (
      <div>
        <br />
        <br />
        <br />

        <select name="cars" className="select-css" onChange={this.handleChange}>
          <option value="" selected>
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
                        src={
                          imageList[
                            Math.floor(Math.random() * imageList.length)
                          ]
                        }
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
