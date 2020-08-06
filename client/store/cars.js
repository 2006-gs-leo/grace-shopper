import axios from 'axios'

/**
 * ACTION TYPES
 */

const SET_CARS = 'SET_CARS'

/**
 * INITIAL STATE
 */

const initialState = {}

/**
 * ACTION CREATORS
 */

export const setCars = cars => {
  return {
    type: SET_CARS,
    cars
  }
}

/**
 * THUNK CREATORS
 */

export const fetchCars = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/cars')

      dispatch(setCars(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export default function carsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARS:
      return action.cars
    default:
      return state
  }
}
