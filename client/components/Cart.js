import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart, addItem, deleteItem, updateItemQty} from '../store/cart'
import CartItem from './CartItem'
import CartNavbar from './CartNavbar'
import CheckOut from './CheckOut'

let cartItems = []

for (let element of Object.keys(localStorage)) {
  cartItems.push(JSON.parse(localStorage.getItem(element)))
}

export class Cart extends Component {
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
    console.log('Cart Mounter state =', this.state)
    console.log('Cart Mounter props = ', this.props)
    console.log('Cart Mounter cart items = ', cartItems)
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
    console.log('This is props on Cart.js', this.props)
    // let total = 0
    // item.forEach((product) => {
    //   total += product.price * product.productOrder.productQuantity
    // })
    return (
      <div className="cartmaindiv">
        <div className="parentcart">
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
          <button
            className="checkoutbtn"
            type="submit"
            onClick={() => <CheckOut />}
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
    fetchCart: () => dispatch(fetchCart()),
    addItems: item => dispatch(addItem(item)),
    deleteItem: itemId => dispatch(deleteItem(itemId)),
    updateItemQty: (itemId, itemQty) => dispatch(updateItemQty(itemId, itemQty))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
