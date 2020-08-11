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
        You have reached the Support And Contact Page!
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
            <div className="imageBehindTextContact">Support {`&`} Contact</div>
            <br />
            <br />

            <br />
            <br />

            <div className="aboutUsText">
              Text me if you have any questions (224) 306-4486
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
