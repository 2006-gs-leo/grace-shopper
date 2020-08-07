import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchItems, addItem, deleteItem, updateItemThunk} from '../store/cart'
import ProductMini from './ProductMini'

export class Cart extends Component {
  constructor() {
    super()
    this.state = {
      cart: 'Cart',
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
        price: '27,000'
      },
      {
        make: 'Honda',
        model: 'Civic',
        vehicleYear: 2000,
        price: '27,000'
      },
      {
        make: 'Honda',
        model: 'Civic',
        vehicleYear: 2005,
        price: '27,000'
      }
    ]
    // const {products} = this.props.cart
    // let total = 0
    // products.forEach((product) => {
    //   total += product.price * product.productOrder.productQuantity
    // })
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
              {theFakeItems.map(item => {
                return (
                  <ProductMini
                    item={item}
                    deleteItem={this.props.deleteItem}
                    updateQuantity={this.props.updateQuantity}
                    key={item.id}
                  />
                )
              })}
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
          <button
            className="checkoutbtn"
            type="submit"
            onClick={() => this.localStorageCheckout}
          >
            checkout
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(fetchItems()),
    addItems: item => dispatch(addItem(item)),
    deleteItem: itemId => dispatch(deleteItem(itemId)),
    updateItemQty: (itemId, itemQty) =>
      dispatch(updateItemThunk(itemId, itemQty))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
