import React, {Component} from 'react'

export default class CheckOut extends Component {
  constructor() {
    super()
    this.state = {
      paymentInfo: ''
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }
  render() {
    return (
      <div className="leftsidecart">
        <div className="paymentDIV">
          <div className="dropdown">
            <h1>Payment Method</h1>
            <select name="paymentmethod" id="paymentmethod">
              <option value="mastercard">Mastercard</option>
              <option value="discover">Discover</option>
              <option value="americanexpress">American Express</option>
              <option value="applepay">Apply Pay</option>
            </select>
          </div>
        </div>
        <div className="shippingInfo">
          <form>
            <fieldset className="info">
              <h1>Billing Information</h1>
              <label htmlFor="firstname">First name:</label>
              <input
                className="input-adjust"
                type="text"
                id="firstname1"
                onChange={this.handleChange}
              />
              <label>Last name:</label>
              <input
                className="input-adjust"
                type="text"
                id="lastname1"
                onChange={this.handleChange}
              />
              <label>Address:</label>
              <input
                className="input-adjust"
                type="text"
                id="address1"
                onChange={this.handleChange}
              />
              <label>City:</label>
              <input
                className="input-adjust"
                type="text"
                id="city1"
                onChange={this.handleChange}
              />
              <label>Country:</label>
              <input
                className="input-adjust"
                type="text"
                id="country1"
                onChange={this.handleChange}
              />
            </fieldset>

            <input
              className="input-adjust"
              type="submit"
              value="Submit"
              onChange={this.handleChange}
            />
          </form>
        </div>
        <div className="checkoutInfo">
          <fieldset className="info">
            <h1>Shipping Information</h1>
            <label htmlFor="billing-info">Same as my billing address:</label>
            <input
              className="input-adjust"
              type="checkbox"
              id="billing-info"
              name="billing-info"
              onChange={this.handleChange}
            />
            <label>First name:</label>
            <input
              className="input-adjust"
              type="text"
              id="firstname2"
              onChange={this.handleChange}
            />
            <label>Last name:</label>
            <input
              className="input-adjust"
              type="text"
              id="lastname2"
              onChange={this.handleChange}
            />
            <label>Address:</label>
            <input
              className="input-adjust"
              type="text"
              id="address2"
              onChange={this.handleChange}
            />
            <label>City:</label>
            <input
              className="input-adjust"
              type="text"
              id="city2"
              onChange={this.handleChange}
            />
            <label>Country:</label>
            <input
              className="input-adjust"
              type="text"
              id="country2"
              onChange={this.handleChange}
            />
          </fieldset>
        </div>
      </div>
    )
  }
}
