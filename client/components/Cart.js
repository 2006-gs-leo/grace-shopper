import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchItems, addItem, deleteItem} from '../store/cart'
import {Link} from 'react-router-dom'

export class Cart extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Shopping Cart',
      items: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidMount() {
  //   this.props.getItems()
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const cart = this.state
    this.props.addItem(cart)
    this.setState({
      cart: {
        id: '',
        model: '',
        year: '',
        units: 0
      }
    })
  }

  render() {
    const theFakeItems = [
      {
        make: 'Honda',
        model: 'Civic',
        vehicleYear: 1990,
        description: 'A nice car for you',
        price: '27,000',
        cylinderCount: 6,
        mpg: 32,
        exteriorColor: 'black',
        interiorColor: 'black',
        transmission: 'automatic',
        drivetrain: 'awd',
        quantity: 0,
        imageUrl: 'http://www.fillmurray.com/140/100'
      },
      {
        make: 'Honda',
        model: 'Civic',
        vehicleYear: 2000,
        description: 'A nice car for you',
        price: '27,000',
        cylinderCount: 6,
        mpg: 32,
        exteriorColor: 'black',
        interiorColor: 'black',
        transmission: 'automatic',
        drivetrain: 'awd',
        quantity: 0,
        imageUrl: 'http://www.fillmurray.com/140/100'
      },
      {
        make: 'Honda',
        model: 'Civic',
        vehicleYear: 2005,
        description: 'A nice car for you',
        price: '27,000',
        cylinderCount: 6,
        mpg: 32,
        exteriorColor: 'black',
        interiorColor: 'black',
        transmission: 'automatic',
        drivetrain: 'awd',
        quantity: 0,
        imageUrl: 'http://www.fillmurray.com/140/100'
      }
    ]
    const items = this.props.items
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
                <label htmlFor="billing-info">
                  Same as my billing address:
                </label>
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
            <h1>ITEMS</h1>

            <ul>
              {theFakeItems.map(item => (
                <div key={item.id} className="singleItemDiv">
                  <h4>
                    <Link className="itemMakeLink" to={`/items/${item.id}`}>
                      <h5>Make: {item.make}</h5>
                    </Link>
                  </h4>
                  <h4>Model: {item.model}</h4>
                  <h4>Year: {item.vehicleYear}</h4>
                  <h4>Description: {item.description}</h4>
                  <h4>price: {item.price}</h4>
                  <h4>Cylinders: {item.cylinderCount}</h4>
                  <h4>MPG: {item.mpg}</h4>
                  <h4>Color: {item.exteriorColor}</h4>
                  <h4>Interior Color: {item.interiorColor}</h4>
                  <h4>Transmission: {item.transmission}</h4>
                  <h4>Drivetrain: {item.drivetrain}</h4>

                  <div>
                    <img className="itemImg" src={item.imageUrl} />
                  </div>
                  <button
                    type="submit"
                    className="remove"
                    onClick={() => this.props.deleteItem(item.id)}
                  >
                    REMOVE
                  </button>
                  <button
                    type="submit"
                    className="remove"
                    onClick={() => this.props.addItem(item)}
                  >
                    +
                  </button>
                  <button
                    type="submit"
                    className="remove"
                    onClick={() => this.props.deleteItem(item.id)}
                  >
                    -
                  </button>
                </div>
              ))}
            </ul>
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
}

const mapStateToProps = reduxState => {
  return {
    items: reduxState.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(fetchItems()),
    addItems: item => dispatch(addItem(item)),
    deleteItem: itemId => dispatch(deleteItem(itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
