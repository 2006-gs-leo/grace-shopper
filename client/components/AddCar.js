import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {submitSingleCarData} from '../store/SingleCar'

export class AddCar extends React.Component {
  constructor() {
    super()
    this.state = {
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
      vehicleYear: null
    }
    this.mapInputToState = this.mapInputToState.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
      vehicleYear
    } = this.state
    this.props.submitCar({
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
      vehicleYear
    })
  }

  // eslint-disable-next-line complexity
  render() {
    let userObject = this.props.reduxState.user.user
    if (userObject === undefined || Object.keys(userObject).length === 0) {
      userObject = 'none'
    } else {
      userObject = JSON.parse(this.props.reduxState.user.user)
    }

    let {
      cylinderCount,
      drivetrain,
      exteriorColor,
      interiorColor,
      quantity,
      transmission,
      mpg
    } = this.state
    return (
      <div>
        <div>
          {userObject.firstName ? (
            <div>
              Welcome back, {userObject.firstName} {userObject.lastName} (
              {userObject.email})
            </div>
          ) : (
            // we can display two different things depending on whether the user is logged in
            <div>Need to log in</div>
          )}
        </div>
        <div className="addCarForm">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="cylinderCount">
              {![
                'all',
                '4-cylinder',
                '5-cylinder',
                '6-cylinder',
                '8-cylinder',
                '10-cylinder',
                '12-cylinder'
              ].includes(cylinderCount) ? (
                <span style={{color: 'red'}}>
                  *needs to be one of all, 4-cylinder, 5-cylinder, 6-cylinder,
                  8-cylinder, 10-cylinder, 12-cylinder
                </span>
              ) : (
                <span />
              )}
              Cylinder Count:
            </label>
            <input name="cylinderCount" onChange={this.mapInputToState} />
            <br />

            <label htmlFor="description">Description: </label>
            <textarea name="description" onChange={this.mapInputToState} />
            <br />

            <label htmlFor="drivetrain">
              {!['awd', 'rwd', 'fwd', '4wd'].includes(drivetrain) ? (
                <span style={{color: 'red'}}>
                  *needs to be one of awd, rwd, fwd, 4wd
                </span>
              ) : (
                <span />
              )}
              Drive Train:
            </label>
            <input name="drivetrain" onChange={this.mapInputToState} />
            <br />

            <label htmlFor="exteriorColor">
              {![
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
              ].includes(exteriorColor) ? (
                <span style={{color: 'red'}}>
                  *needs to be one of Beige, Black, Blue, Brown, Gold, Gray,
                  Green, Orange, Pink, Purple, Red, Silver, White, Yellow, Other
                </span>
              ) : (
                <span />
              )}
              Exterior Color:
            </label>
            <input name="exteriorColor" onChange={this.mapInputToState} />
            <br />
            <label htmlFor="interiorColor">
              {![
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
              ].includes(interiorColor) ? (
                <span style={{color: 'red'}}>
                  *needs to be one of Beige, Black, Blue, Brown, Gold, Gray,
                  Green, Orange, Pink, Purple, Red, Silver, White, Yellow, Other
                </span>
              ) : (
                <span />
              )}
              Interior Color:
            </label>
            <input name="interiorColor" onChange={this.mapInputToState} />
            <br />
            <label htmlFor="make">Make: </label>
            <input name="make" onChange={this.mapInputToState} />
            <br />
            <label htmlFor="model">Model: </label>
            <input name="model" onChange={this.mapInputToState} />
            <br />
            <label htmlFor="mpg">
              {!(Number(mpg) == mpg) ? (
                <span style={{color: 'red'}}>*needs to be an integer</span>
              ) : (
                <span />
              )}
              MPG:
            </label>
            <input name="mpg" onChange={this.mapInputToState} />
            <br />
            <label htmlFor="price">Price: </label>
            <input name="price" onChange={this.mapInputToState} />
            <br />
            <label htmlFor="quantity">
              {quantity < 1 ? (
                <span style={{color: 'red'}}>*needs to be a minimum of 1</span>
              ) : (
                <span />
              )}
              Quantity:
            </label>
            <input name="quantity" onChange={this.mapInputToState} />
            <br />
            <label htmlFor="transmission">
              {!['manual', 'automatic'].includes(transmission) ? (
                <span style={{color: 'red'}}>
                  *needs to be one of manual, automatic
                </span>
              ) : (
                <span />
              )}
              Transmission:
            </label>
            <input name="transmission" onChange={this.mapInputToState} />
            <br />
            <label htmlFor="vehicleYear">Vehicle Year: </label>
            <input name="vehicleYear" onChange={this.mapInputToState} />
            <br />

            <button type="button" onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

// need this so that we can only show the form if the person is logged in
const mapStateToProps = state => {
  return {
    reduxState: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitCar: data => {
      dispatch(submitSingleCarData(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCar)
