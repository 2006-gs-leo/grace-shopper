import React, {Component} from 'react'
import {connect} from 'react-redux'

export const Cart = () => {
  return (
    <div className="cartmaindiv">
      <div className="parentcart">
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
                <input className="input-adjust" type="text" id="firstname1" />
                <label>Last name:</label>
                <input className="input-adjust" type="text" id="lastname1" />
                <label>Address:</label>
                <input className="input-adjust" type="text" id="address1" />
                <label>City:</label>
                <input className="input-adjust" type="text" id="city1" />
                <label>Country:</label>
                <input className="input-adjust" type="text" id="country1" />
              </fieldset>

              <input className="input-adjust" type="submit" value="Submit" />
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
              />
              <label>First name:</label>
              <input className="input-adjust" type="text" id="firstname2" />
              <label>Last name:</label>
              <input className="input-adjust" type="text" id="lastname2" />
              <label>Address:</label>
              <input className="input-adjust" type="text" id="address2" />
              <label>City:</label>
              <input className="input-adjust" type="text" id="city2" />
              <label>Country:</label>
              <input className="input-adjust" type="text" id="country2" />
            </fieldset>
          </div>
        </div>
        <div className="itemsDiv">
          <h5>Items</h5>
          <ol>
            <li>i would like to map over the cars on props </li>
            <li>to put information here</li>
            <li>
              maybe render out a mini Component that looks liek the single view
            </li>
          </ol>
        </div>
        <div className="logodiv">
          <img src="JDBCARS_LOGO.png" />
        </div>
      </div>
      <div className="carttotal">
        <h1>Total:</h1>
      </div>
      <div>
        <button className="checkoutbtn" type="submit">
          checkout
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
