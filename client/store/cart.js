import axios from 'axios'

//ACTION TYPE
const SET_ITEMS = 'SET_ITEMS'
const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'

//ACTION CREATOR
export const setItems = items => ({
  type: SET_ITEMS,
  items: items
})

export const addNewItem = item => {
  return {
    type: ADD_NEW_ITEM,
    item
  }
}

export const removeItem = item => ({
  type: REMOVE_ITEM,
  item
})

export const updateItem = item => ({
  type: UPDATE_ITEM,
  item
})

//THUNKCREATORS
export const fetchItems = () => async dispatch => {
  try {
    const response = await axios.get('/api/items')
    const items = response.data
    const action = setItems(items)
    dispatch(action)
  } catch (error) {
    console.log('ERROR IN FETCH ITEMS THUNK', error)
  }
}

export const addItem = item => async dispatch => {
  try {
    const {data} = await axios.post('/api/items', item)
    dispatch(addNewItem(data))
  } catch (error) {
    console.log('ERROR IN ADD ITEM THUNK', error)
  }
}

export const deleteItem = itemId => async dispatch => {
  try {
    await axios.delete(`/api/items/${itemId.id}`)
    dispatch(removeItem(itemId))
  } catch (error) {
    console.log('ERROR IN DELETE ITEM THUNK', error)
  }
}

export const updateItemThunk = item => async dispatch => {
  try {
    const {data} = await axios.put(`/api/items/${item.id}`, item)
    dispatch(updateItem(data))
  } catch (error) {
    console.log('ERROR IN Update Item Thunk', error)
  }
}

// added to the Redux store with combineReducers
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case SET_ITEMS:
      return action.items
    case ADD_NEW_ITEM:
      return [...state, action.item]
    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.item.id)
    case UPDATE_ITEM:
      return action.item
    default:
      return state
  }
}
