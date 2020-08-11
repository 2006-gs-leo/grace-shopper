import React from 'react'
import {connect} from 'react-redux'

class AboutUs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let userObject = this.props.reduxState.user.user
    if (userObject === undefined || Object.keys(userObject).length === 0) {
      userObject = 'none'
    } else {
      userObject = JSON.parse(this.props.reduxState.user.user)
    }
    return (
      <div>
        You have reached the About Us Page!
        <div>
          {userObject.firstName ? (
            <div>
              Welcome back, {userObject.firstName} {userObject.lastName} (
              {userObject.email})
            </div>
          ) : (
            <div>Need to log in</div>
          )}

          <div>
            <div className="imageBehindText">About Us</div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="aboutUsText">
              At JDB cars we want to make sure that you get all the cars that
              you want, and secondly when you make an account and log in, that
              you can checkout cars. Only admins have the ability to edit, add
              or remove. Anyway, we're just a car dealership in the sense of
              Carvana or Cars.com. We started less than a week ago and if you're
              not satisfied with your car, then you can blame us. We're an
              underground self made car sell and resell shop. We started out in
              rough water and made it to a bright future.
              <br />
              <br />
              Our data is mostly generated using faker.js (and some of it is
              hardcoded); authentication and access control is currently being
              done by accessing/determining if there is a user object which is
              located on the Redux store; once we log in, we initiate an action
              which puts the currently logged in user object on store.
              <br />
              <br />
              We went through a lot of hurdles in the process of getting our
              data loaded from the database. That means, we needed to change the
              information that we were accepting within the database; Bobby did
              this, populating the database with arbitrary make, model,
              vehicleYear, description, price, engineType, mpg, exteriorColor,
              interiorColor, transmission, drivetrain, and doors.
              <br />
              <br />
              Originally, we had thought that we were going to use a third-party
              API in order to populate the database; Bobby and I eventually
              decided instead to populate the database manually, that is, to
              hard-code it. I would say that we achieved most of our goals,
              except for the payment platform. We currently have user access
              control, however we are not using a payment platform (Stripe,
              Google Pay, Apple Pay or Venmo) in order for the user to check
              things out. We're currently storing cart data on local storage;
              what remains is to also store it on the database and return it to
              the browser to ensure that it remains consistent across devices.
              <br />
              <br />
              Please test our web security against random API requests! We see
              this as a learning opportunity to see which API routes are
              vulnerable, such as user authentication (we originally wanted to
              obfuscate the password using a hash function and Bobby is working
              on this currently). As for the user interface, most of it was done
              by Jake and Dean. The cart window which you can see, as well as
              the cart functionality was done by Jake. Generally, we each took
              turns working on the database and the UI in order to maintain
              vertical slices. Other hurdles which we encountered include the
              fact that in JavaScript, floats are approximate values and so it's
              better to keep our numbers as integers rather than floats. We
              learned a lot about React lifecycles, through tables, and user
              authentication; thank you for your feedback.
              <br />
              <br />
              <div className="aboutUsFooter">-JDB</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reduxState: state
  }
}

export default connect(mapStateToProps, null)(AboutUs)
