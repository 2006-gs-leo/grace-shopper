import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchCart,
  addItem,
  deleteItem,
  updateItemQty,
  saveCart
} from '../store/cart'
import CartItem from './CartItem'
import CartNavbar from './CartNavbar'
import CheckOut from './CheckOut'

let cartItems = []

for (let element of Object.keys(localStorage)) {
  if (Number(element)) {
    // need to make sure we're not iterating over everything else in local storage.
    // helps to check whether we're looking at a car ID or something else
    cartItems.push(JSON.parse(localStorage.getItem(element)))
  }
}

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      cart: cartItems,
      amount: 0,
      total: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // this.props.fetchCart()
    this.setState({
      cart: cartItems,
      amount: 0,
      total: 0
    })
    // this.props.saveCart()
    let userObject = this.props.reduxState.user.user
    if (userObject === undefined || Object.keys(userObject).length === 0) {
      userObject = 'none'
    } else {
      userObject = JSON.parse(this.props.reduxState.user.user)
      console.log('cart items: ', cartItems)
      console.log('cart items stringified', JSON.stringify(cartItems))
      this.props.saveCart(userObject.email, 'cart data, stringified') // this is how we might access cart data across devices
      // this.props.saveCart(userObject.email, JSON.stringify(cartItems))
    } // so far the sample object shows up in the carts database, and now we need to decide what data we store and how we retrieve it
    console.log(userObject)
  }

  clearLocalCart() {
    localStorage.clear()
    this.setState({
      cart: cartItems,
      amount: 0,
      total: 0
    })
  }

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
    // let total = 0
    // item.forEach((product) => {
    //   total += product.price * product.productOrder.productQuantity
    // })
    return (
      <div className="cartmaindiv">
        <div className="parentcart">
          <CheckOut handleChange={this.handleChange} />

          <div className="itemsDiv">
            <header>
              <CartNavbar deleteItem={deleteItem} />
            </header>
            <article>
              {this.state.cart.map(item => {
                return (
                  <div key={item.id}>
                    <CartItem
                      item={item}
                      deleteItem={deleteItem}
                      updateItemQty={updateItemQty}
                      key={item.id}
                    />
                  </div>
                )
              })}
            </article>
            <button
              className="btn clear-btn"
              type="submit"
              onClick={this.clearLocalCart}
            >
              clear cart
            </button>
          </div>
          <div className="logodiv">
            <img src="JDBCARS_LOGO.png" />
          </div>
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>$total</span>
            </h4>
          </div>
        </footer>
        <div>
          <button className="checkoutbtn" type="submit">
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
    user: state.user,
    reduxState: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCart: () => dispatch(fetchCart()),
    addItems: item => dispatch(addItem(item)),
    deleteItem: itemId => dispatch(deleteItem(itemId)),
    updateItemQty: (itemId, itemQty) =>
      dispatch(updateItemQty(itemId, itemQty)),
    saveCart: (userEmail, data) => dispatch(saveCart(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
