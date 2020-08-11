import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleCarData, editSingleCarData} from '../store/SingleCar'
import EditCar from './EditCar'

export class SingleCarView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      cylinderCount: '',
      description: '',
      drivetrain: '',
      exteriorColor: '',
      id: null,
      interiorColor: '',
      make: '',
      model: '',
      mpg: null,
      price: null,
      quantity: null,
      transmission: '',
      vehicleYear: null,
      highlight1: '',
      highlight2: ''
    }
    this.scrollToBottom = this.scrollToBottom.bind(this)
    this.showEditForm = this.showEditForm.bind(this)
    this.mapInputToState = this.mapInputToState.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addToLocalStorage = this.addToLocalStorage.bind(this)
  }

  componentDidMount() {
    this.props.fetchCar(this.props.match.params.carId)
  }

  addToLocalStorage() {
    localStorage.setItem(
      `${this.props.match.params.carId}`,
      JSON.stringify(this.props.cars.SingleCar)
    )
  }

  scrollToBottom() {
    this.div.scrollIntoView({behavior: 'smooth'})
  }

  mapInputToState(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const {
      cylinderCount,
      description,
      drivetrain,
      exteriorColor,
      id,
      interiorColor,
      make,
      model,
      mpg,
      price,
      quantity,
      transmission,
      vehicleYear,
      highlight1,
      highlight2
    } = this.state
    this.props.editCar(this.props.match.params.carId, {
      cylinderCount,
      description,
      drivetrain,
      exteriorColor,
      id,
      interiorColor,
      make,
      model,
      mpg,
      price,
      quantity,
      transmission,
      vehicleYear,
      highlight1,
      highlight2
    })
    this.setState({showForm: false})
    this.props.fetchCar(this.props.match.params.carId)
  }

  showEditForm() {
    this.setState({showForm: !this.state.showForm})
    const {
      cylinderCount,
      description,
      drivetrain,
      exteriorColor,
      id,
      interiorColor,
      make,
      model,
      mpg,
      price,
      quantity,
      transmission,
      vehicleYear,
      highlight1,
      highlight2
    } = this.props.cars.SingleCar
    this.setState({
      cylinderCount,
      description,
      drivetrain,
      exteriorColor,
      id,
      interiorColor,
      make,
      model,
      mpg,
      price,
      quantity,
      transmission,
      vehicleYear,
      highlight1,
      highlight2
    })
  }

  render() {
    return (
      <div>
        <div className="singleViewNavbar">
          <a className="singleViewNavbarLink" onClick={this.scrollToBottom}>
            Overview
          </a>
          <div className="textSeparator">|</div>
          <a className="singleViewNavbarLink" onClick={this.scrollToBottom}>
            Reviews
          </a>
          <div className="textSeparator">|</div>
          <a className="singleViewNavbarLink" onClick={this.scrollToBottom}>
            Safety
          </a>
          <div className="textSeparator">|</div>
          <a className="singleViewNavbarLink" onClick={this.scrollToBottom}>
            Warranty
          </a>
        </div>
        <div className="singleViewOverlay">
          <div>{`${this.props.cars.SingleCar.make} ${
            this.props.cars.SingleCar.model
          }`}</div>
          <div>
            Price:
            <br />-{`${this.props.cars.SingleCar.price}`}-
          </div>
          <div>
            Miles/Gallon:
            <br />-{`${this.props.cars.SingleCar.mpg}`}-
          </div>
        </div>
        <div className="singleViewFirstSection">
          <img
            className="singleViewBackgroundImage"
            src="https://image.freepik.com/free-photo/3d-render-background-car_54981-80.jpg"
          />
          <div className="moreDetails">↓ Scroll for more details</div>
        </div>

        <div className="singleViewDivider">===</div>

        <div
          className="singleViewSecondSection"
          ref={div => {
            this.div = div
          }}
        >
          <div>
            <div className="singleViewDescriptionPrice">
              <div>
                <b>Description:</b>
                <br />
                {`${this.props.cars.SingleCar.description}`}
              </div>
              <div>
                <b>Price:</b>
                <br />-{`${this.props.cars.SingleCar.price}`}-
              </div>
              <br />
              <button
                id="addToCartButton"
                type="button"
                onClick={this.addToLocalStorage}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="highlightsTitle">Highlights</div>
          <div className="singleViewHighlights">
            <div>{`${this.props.cars.SingleCar.highlight1}`}</div>
            <div>{`${this.props.cars.SingleCar.highlight2}`}</div>
          </div>
          <div className="singleViewDetails">
            <div>
              Cylinder Count: {`${this.props.cars.SingleCar.cylinderCount}`}
            </div>
            <div>Drivetrain: {`${this.props.cars.SingleCar.drivetrain}`}</div>
            <div>
              Exterior Color: {`${this.props.cars.SingleCar.exteriorColor}`}
            </div>
            <div>
              Interior Color: {`${this.props.cars.SingleCar.interiorColor}`}
            </div>
            <div>Make: {`${this.props.cars.SingleCar.make}`}</div>
            <div>Model: {`${this.props.cars.SingleCar.model}`}</div>
            <div>MPG: {`${this.props.cars.SingleCar.mpg}`}</div>
            <div>Price: {`${this.props.cars.SingleCar.price}`}</div>
            <div>Quantity: {`${this.props.cars.SingleCar.quantity}`}</div>
            <div>
              Transmission: {`${this.props.cars.SingleCar.transmission}`}
            </div>
            <div>
              Vehicle Year: {`${this.props.cars.SingleCar.vehicleYear}`}
            </div>
          </div>
        </div>
        <div className="editForm">
          <button
            type="button"
            className="editCarButton"
            onClick={this.showEditForm}
          >
            EDIT CAR
          </button>
          {this.state.showForm ? (
            <EditCar
              cylinderCount={this.state.cylinderCount}
              description={this.state.description}
              drivetrain={this.state.drivetrain}
              exteriorColor={this.state.exteriorColor}
              id={this.state.id}
              interiorColor={this.state.interiorColor}
              make={this.state.make}
              model={this.state.model}
              mpg={this.state.mpg}
              price={this.state.price}
              quantity={this.state.quantity}
              transmission={this.state.transmission}
              vehicleYear={this.state.vehicleYear}
              highlight1={this.state.highlight1}
              highlight2={this.state.highlight2}
              mapInputToState={this.mapInputToState}
              handleSubmit={this.handleSubmit}
            />
          ) : (
            ''
          )}
        </div>
        <div id="footer" className="footerSingleView">
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

const mapStateToProps = state => {
  return {cars: state}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCar: carId => {
      dispatch(fetchSingleCarData(carId))
    },
    editCar: (carId, edits) => {
      dispatch(editSingleCarData(carId, edits))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCarView)
