import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class EditCar extends React.Component {
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
  }
  componentDidMount() {
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
    } = this.props
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
      vehicleYear
    })
  }
  // eslint-disable-next-line complexity
  render() {
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
    } = this.props

    let userObject = this.props.reduxState.user.user
    if (userObject === undefined || Object.keys(userObject).length === 0) {
      userObject = 'none'
    } else {
      userObject = JSON.parse(this.props.reduxState.user.user)
    }
    return (
      <div>
        {userObject.firstName ? (
          <div>
            Welcome back, {userObject.firstName} {userObject.lastName} (
            {userObject.email})
          </div>
        ) : (
          // we can display two different things depending on whether the user is logged in
          <div> Need to log in </div>
        )}

        <div className=".addForm">
          <form onSubmit={this.props.handleSubmit}>
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
            <input
              name="cylinderCount"
              value={cylinderCount}
              onChange={this.props.mapInputToState}
            />
            <br />

            <label htmlFor="description">Description: </label>
            <textarea
              name="description"
              value={description}
              onChange={this.props.mapInputToState}
            />
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
            <input
              name="drivetrain"
              value={drivetrain}
              onChange={this.props.mapInputToState}
            />
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
            <input
              name="exteriorColor"
              value={exteriorColor}
              onChange={this.props.mapInputToState}
            />
            <br />
            <label htmlFor="id">Car ID: </label>
            <input name="id" value={id} onChange={this.props.mapInputToState} />
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
            <input
              name="interiorColor"
              value={interiorColor}
              onChange={this.props.mapInputToState}
            />
            <br />
            <label htmlFor="make">Make: </label>
            <input
              name="make"
              value={make}
              onChange={this.props.mapInputToState}
            />
            <br />
            <label htmlFor="model">Model: </label>
            <input
              name="model"
              value={model}
              onChange={this.props.mapInputToState}
            />
            <br />
            <label htmlFor="mpg">MPG: </label>
            <input
              name="mpg"
              value={mpg}
              onChange={this.props.mapInputToState}
            />
            <br />
            <label htmlFor="price">Price: </label>
            <input
              name="price"
              value={price}
              onChange={this.props.mapInputToState}
            />
            <br />
            <label htmlFor="quantity">
              {quantity < 1 ? (
                <span style={{color: 'red'}}>*needs to be a minimum of 1</span>
              ) : (
                <span />
              )}
              Quantity:
            </label>
            <input
              name="quantity"
              value={quantity}
              onChange={this.props.mapInputToState}
            />
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
            <input
              name="transmission"
              value={transmission}
              onChange={this.props.mapInputToState}
            />
            <br />
            <label htmlFor="vehicleYear">Vehicle Year: </label>
            <input
              name="vehicleYear"
              value={vehicleYear}
              onChange={this.props.mapInputToState}
            />
            <br />

            <button type="button" onClick={this.props.handleSubmit}>
              Submit
            </button>
            <Link to="/add" className="addCarLink">
              Add a Car
            </Link>
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

export default connect(mapStateToProps, null)(EditCar)
