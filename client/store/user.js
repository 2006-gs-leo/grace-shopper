import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ADD_USER = 'ADD_USER'
const SET_FETCHING_STATUS = 'SET_FETCHING_STATUS'
/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => {
  console.log('Action creator user', user)
  return {
    type: GET_USER,
    user
  }
}
const removeUser = () => ({type: REMOVE_USER})
const addUser = () => ({type: ADD_USER})

const setFetchingStatus = isFetching => ({
  type: SET_FETCHING_STATUS,
  isFetching
})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}
export const fetchMe = () => {
  return async dispatch => {
    dispatch(setFetchingStatus(true))
    try {
      const response = await axios.get('/auth/me')
      dispatch(getUser(response.data))
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setFetchingStatus(false))
    }
  }
}
export const login = credentials => {
  return async dispatch => {
    try {
      console.log('did we reach the login thunk creator?')
      const response = await axios.put('/auth/login', credentials) // this is where we actually make the axios.put request, to /auth/login
      console.log(
        'within the login thunk creator, the response returned from the server was ',
        response
      )
      dispatch(getUser(response.config.data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const addNewUser = user => async dispatch => {
  try {
    const {data} = await axios.post('/api/users', user)
    dispatch(addUser(data))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    console.log('Thunk AUth email', email)
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      console.log(
        'our reducer is going to be modified with the following action.user: ',
        action.user
      )
      return {
        ...state,
        user: action.user
      }
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
