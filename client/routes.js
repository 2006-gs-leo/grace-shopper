import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  MainPage,
  SingleCarView,
  AddCar,
  AboutUs,
  HowItWorks,
  SupportAndContact
} from './components'
import {me} from './store'
import Cart from './components/Cart'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/cars" component={MainPage} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/add" component={AddCar} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/howitworks" component={HowItWorks} />
        <Route exact path="/support" component={SupportAndContact} />
        <Route exact path="/cars/:carId" component={SingleCarView} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/home" component={UserHome} />
            <Route exact path="/main" component={MainPage} />
            <Route exact path="/cars" component={MainPage} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/add" component={AddCar} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
