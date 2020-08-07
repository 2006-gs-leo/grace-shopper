/*
This is a mini single product component that is rendering in the parent Cart component
*/

import React from 'react'

export default function ProductMini(props) {
  const {make, model, vehicleYear, price, id} = props.item

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
          onClick={() => props.updateItemQty()}
        >
          REMOVE FROM CART
        </button>
        <button
          type="button"
          className="adjustdown"
          onClick={() => props.updateItemQty()}
        >
          +
        </button>
        <button
          type="submit"
          className="remove"
          onClick={() => props.deleteItem(item.id)}
        >
          -
        </button>
      </div>
    </div>
  )
}
