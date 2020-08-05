import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="authFormWhole">
      <form className="form-signin" onSubmit={handleSubmit} name={name}>
        <div className="emailForm">
          <img src="JDGCARS_LOGO.png" alt="" />
          <h3 className="h3 mb-3 font-weight-normal">Please sign in</h3>
          <p>
            Don't have a JDG account? &nbsp;
            <small>
              <span>
                Create one here
                <Link to="/signup"> join the JDG family!</Link>
              </span>
            </small>
          </p>
        </div>
        <div className="emailForm">
          <label className="form-signin" htmlFor="email" />
          <input placeholder="Email address" name="email" type="text" />
          <label className="form-signin" htmlFor="password" />
          <input placeholder="Password" name="password" type="password" />
        </div>
        <div className="emailForm">
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
        <div className="emailForm">
          <button>
            <a href="/auth/google">{displayName} with Google</a>
          </button>
        </div>
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
