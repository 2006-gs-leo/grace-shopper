import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Link} from 'react-router-dom'
// import {addNewUser} from '../store/user'

/**
 * COMPONENT
 */
class AuthForm extends Component {
  constructor() {
    super()
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit() {
    this.setState({
      [event.target.name]: event.target.value
    })

    this.props.addUser(this.state)
  }

  render() {
    const {name, displayName, handleSubmit, error} = this.props

    return (
      <div className="authFormWhole">
        <form className="form-signin" onSubmit={handleSubmit} name={name}>
          <div className="emailForm">
            <img src="JDBCARS_LOGO.png" alt="" />
            {displayName === 'Sign Up' ? (
              <h3 className="h3 mb-3 font-weight-normal">Please sign up</h3>
            ) : (
              <h3 className="h3 mb-3 font-weight-normal">Please sign in</h3>
            )}

            <p>
              Don't have a JDB account? &nbsp;
              <small>
                <span>
                  Create one here
                  <Link to="/signup"> join the JDB family!</Link>
                </span>
              </small>
            </p>
          </div>
          <div className="emailForm">
            {/* {displayName === 'Sign Up' && (
              <div className="emailForm">
                <label className="form-signin" htmlFor="firstName" />
                <input
                  onChange={this.handleChange}
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                />

                <label className="form-signin" htmlFor="lastName" />
                <input
                  onChange={this.handleChange}
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                />
              </div>
            )} */}

            <div className="emailForm">
              <label className="form-signin" htmlFor="firstName" />
              <input
                onChange={this.handleChange}
                placeholder="First Name"
                name="firstName"
                type="text"
              />

              <label className="form-signin" htmlFor="lastName" />
              <input
                onChange={this.handleChange}
                placeholder="Last Name"
                name="lastName"
                type="text"
              />
            </div>

            <label className="form-signin" htmlFor="email" />
            <input
              onChange={this.handleChange}
              placeholder="Email address"
              name="email"
              type="text"
            />

            <label className="form-signin" htmlFor="password" />
            <input
              onChange={this.handleChange}
              placeholder="Password"
              name="password"
              type="password"
            />
          </div>
          <div className="emailForm">
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
          <div className="emailForm">
            <button type="submit">
              <a href="/auth/google">{displayName} with Google</a>
            </button>
          </div>
        </form>
      </div>
    )
  }
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
      // const firstName = evt.target.firstName.value
      // const lastName = evt.target.lastName.value
      // dispatch(auth(email, password, firstName, lastName, formName))
      dispatch(auth(email, password, formName))
    },
    addUser: user => dispatch(addNewUser(user))
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
