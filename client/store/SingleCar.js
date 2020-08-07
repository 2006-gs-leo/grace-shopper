import axios from 'axios'

const GET_SINGLE_CAR = 'GET_SINGLE_CAR'
const EDIT_SINGLE_CAR = 'EDIT_SINGLE_CAR'

const initialState = {}

const getSingleCar = data => ({type: GET_SINGLE_CAR, data})
const editSingleCar = (carId, edits) => ({type: EDIT_SINGLE_CAR, carId, edits})

export const fetchSingleCarData = carId => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/cars/${carId}`)
      console.log('did the axios get request succeed')
      const {data} = response
      dispatch(getSingleCar(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const editSingleCarData = (carId, edits) => {
  console.log('did we make it to the edit single car data thunk')
  return async dispatch => {
    try {
      console.log('are we in the try block of the editsinglecardata thunk? ')
      console.log('the edits are, ', edits)
      console.log('the car id is, ', carId)
      const response = await axios.put(`/api/cars/${carId}`, edits)
      console.log('did the axios put request succeed')
      const {data} = response
      dispatch(editSingleCar(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_CAR:
      console.log('DID WE GET TO THE GET_SINGLE_CAR action REDUCER')
      return action.data
    case EDIT_SINGLE_CAR:
      console.log('DID WE GET TO THE ACTION REDUCER')
      return action.edits
    default:
      return state
  }
}
