import React from 'react'

export default class EditCar extends React.Component {
  constructor(props) {
    super(props)
  }
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
    return (
      <div className=".addForm">
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="cylinderCount">Cylinder Count: </label>
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

          <label htmlFor="drivetrain">Drive Train: </label>
          <input
            name="drivetrain"
            value={drivetrain}
            onChange={this.props.mapInputToState}
          />
          <br />

          <label htmlFor="exteriorColor">Exterior Color: </label>
          <input
            name="exteriorColor"
            value={exteriorColor}
            onChange={this.props.mapInputToState}
          />
          <br />
          <label htmlFor="id">Car ID: </label>
          <input name="id" value={id} onChange={this.props.mapInputToState} />
          <br />
          <label htmlFor="interiorColor">Interior Color: </label>
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
          <input name="mpg" value={mpg} onChange={this.props.mapInputToState} />
          <br />
          <label htmlFor="price">Price: </label>
          <input
            name="price"
            value={price}
            onChange={this.props.mapInputToState}
          />
          <br />
          <label htmlFor="quantity">Quantity: </label>
          <input
            name="quantity"
            value={quantity}
            onChange={this.props.mapInputToState}
          />
          <br />
          <label htmlFor="transmission">Transmission: </label>
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

          <button>Submit</button>
        </form>
      </div>
    )
  }
}
