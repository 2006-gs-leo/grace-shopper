import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <div className="navbarHeaderBanner">
      <img
        className="Covid19Banner"
        src="https://assets.fastly.carvana.io/about-assets/exclamation-icon.png"
      />
      <span className="Covid19Banner">COVID-19 information</span>
      &nbsp;Touchless delivery/pickup is currently underway in your area.
      <a href="/touchless-delivery" className="Covid19Banner">
        {' '}
        Learn more
      </a>
    </div>
    <div className="navbarHeaderInfo">
      <div>
        <Link className="AnchnavbarHeaderInfo" to="/howitworks">
          How it Works?
        </Link>
      </div>
      <div>
        <Link className="AnchnavbarHeaderInfo" to="/aboutus">
          About JDG
        </Link>
      </div>
      <div>
        <Link className="AnchnavbarHeaderInfo" to="/support">
          Support & Contact
        </Link>
      </div>
    </div>
    <div className="navbar">
      <nav>
        {isLoggedIn ? (
          <div className="navbar">
            {/* The navbar will show these links after you log in */}
            <img className="logo" src="JDBCARS_LOGO.png" />
            <Link to="/main">SEARCH CARS</Link>
            <Link to="/add">SELL/TRADE</Link>
            <Link to="/carfinder">CAR FINDER</Link>
            <Link className="right-side-nav" to="/cart">
              CART
            </Link>
            <Link className="right-side-nav" to="/home">
              PROFILE
            </Link>
            <i className="fas fa-shopping-cart" />
            <Link className="right-side-nav" to="/login">
              LOGIN
            </Link>
            <Link className="right-side-nav" to="/signup">
              SIGN UP
            </Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div className="navbar">
            {/* The navbar will show these links before you log in */}
            <img className="logo" src="JDBCARS_LOGO.png" />
            <Link to="/main">SEARCH CARS</Link>
            <Link to="/add">SELL/TRADE</Link>
            <Link to="/carfinder">CAR FINDER</Link>
            <Link className="right-side-nav" to="/cart">
              CART
            </Link>
            <Link className="right-side-nav" to="/home">
              PROFILE
            </Link>
            <i className="fas fa-shopping-cart" />
            <Link className="right-side-nav" to="/login">
              LOGIN
            </Link>
            <Link className="right-side-nav" to="/signup">
              SIGN UP
            </Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
