import axios from 'axios'

const GET_SINGLE_CAR = 'GET_SINGLE_CAR'
const EDIT_SINGLE_CAR = 'EDIT_SINGLE_CAR'
const ADD_NEW_CAR = 'ADD_NEW_CAR'

const initialState = {}

const getSingleCar = data => ({type: GET_SINGLE_CAR, data})
const editSingleCar = (carId, edits) => ({type: EDIT_SINGLE_CAR, carId, edits})
const addSingleCar = car => ({type: ADD_NEW_CAR, car})

export const fetchSingleCarData = carId => {
  return async dispatch => {
    try {
      console.log('DID WE GET TO THIS THUNK')
      const response = await axios.get(`/api/cars/${carId}`)
      const {data} = response
      console.log('responseresponseresponse', response)
      dispatch(getSingleCar(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const submitSingleCarData = carObject => {
  return async dispatch => {
    try {
      const response = await axios.post(`/api/cars`, carObject)
      const {data} = response
      dispatch(addSingleCar(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const editSingleCarData = (carId, edits) => {
  return async dispatch => {
    try {
      const response = await axios.put(`/api/cars/${carId}`, edits)
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
      return action.data
    case EDIT_SINGLE_CAR:
      return action.edits
    case ADD_NEW_CAR:
      return action.car
    default:
      return state
  }
}
