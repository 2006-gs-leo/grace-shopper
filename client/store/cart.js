import axios from 'axios'

//ACTION TYPE
const SET_CART = 'SET_CART'
// const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
// const REMOVE_ITEM = 'REMOVE_ITEM'
// const UPDATE_ITEM = 'UPDATE_ITEM'

//ACTION CREATOR
export const setCart = cart => ({
  type: SET_CART,
  cart
})

// export const addNewItem = (item) => {
//   return {
//     type: ADD_NEW_ITEM,
//     item,
//   }
// }

// export const removeItem = (item) => ({
//   type: REMOVE_ITEM,
//   item,
// })

// export const updateItem = (item) => ({
//   type: UPDATE_ITEM,
//   item,
// })

//THUNKCREATORS
export const fetchItems = () => async dispatch => {
  try {
    const response = await axios.get('/api/users/orders/cart/')
    const items = response.data
    const action = setCart(items)
    dispatch(action)
  } catch (error) {
    console.log('ERROR IN FETCH ITEMS THUNK', error)
  }
}

export const addItem = item => async dispatch => {
  try {
    const {data: updatedCart} = await axios.put('/api/users/orders/cart', item)
    dispatch(setItems(updatedCart))
  } catch (error) {
    console.log('ERROR IN ADD ITEM THUNK', error)
  }
}

export const deleteItem = itemId => async dispatch => {
  try {
    const {data: updatedCart} = await axios.delete(
      '/api/users/orders/cart',
      itemId
    )
    dispatch(setItems(updatedCart))
  } catch (error) {
    console.log('ERROR IN DELETE ITEM THUNK', error)
  }
}

export const updateItemThunk = (itemId, itemQty) => async dispatch => {
  try {
    const {data: updatedCart} = await axios.put('/api/cart/edit', {
      itemId,
      itemQty
    })
    dispatch(setCart(updatedCart))
  } catch (error) {
    console.log('ERROR IN Update Item Thunk', error)
  }
}

// added to the Redux store with combineReducers
export default function cartReducer(
  state = {status: 'in cart', products: []},
  action
) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    // case ADD_NEW_ITEM:
    //   return [...state, action.item]
    // case REMOVE_ITEM:
    //   return state.filter((item) => item.id !== action.item.id)
    // case UPDATE_ITEM:
    //   return action.item
    default:
      return state
  }
}
