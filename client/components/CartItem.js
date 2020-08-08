/*
This is a mini single product component that is rendering in the parent Cart component
*/

import React, {Component} from 'react'
// import {deleteItem, updateItemThunk} from '../store/cart'

export default class CartItem extends Component {
  constructor() {
    super()
    this.state = {
      cars: localStorage.getItem('cart')
    }
    this.removeItemFromCart = this.removeItemFromCart.bind(this)
  }

  removeItemFromCart(key) {
    localStorage.removeItem(key)
    this.setState({
      cart: ''
    })
  }

  render() {
    const {make, model, vehicleYear, price, id} = this.props.item

    console.log('this.props CART ITEM', this.props)
    return (
      <div>
        <div key={id} className="singleItemDiv">
          <h5>Make: {make}</h5>
          <h4>Model: {model}</h4>
          <h4>Year: {vehicleYear}</h4>
          <h4>price: {price}</h4>
          <button
            type="submit"
            className="remove"
            onClick={() => this.removeItemFromCart(id)}
          >
            REMOVE FROM CART
          </button>
          <button
            type="button"
            className="adjustdown"
            onClick={() => this.props.updateItemQty(id, 1)}
          >
            +
          </button>
          <button
            type="submit"
            className="remove"
            onClick={() => this.props.updateItemQty(id, 1)}
          >
            -
          </button>
        </div>
      </div>
    )
  }
}
