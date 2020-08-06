import axios from 'axios'

/**
 * ACTION TYPES
 */

const SET_USERS = 'SET_USERS'

/**
 * INITIAL STATE
 */

const initialState = {}

/**
 * ACTION CREATORS
 */

export const setUsers = users => {
  return {
    type: SET_USERS,
    users
  }
}

/**
 * THUNK CREATORS
 */

export const fetchUsers = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/cars')

      dispatch(setUsers(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return action.users
    default:
      return state
  }
}
