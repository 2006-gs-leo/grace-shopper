import React from 'react'
import {connect} from 'react-redux'

class AboutUs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        You have reached the Support And Contact Page!
        <div>
          {this.props.reduxState.user.firstName ? (
            <div>
              Welcome back, {this.props.reduxState.user.firstName}{' '}
              {this.props.reduxState.user.lastName} (
              {this.props.reduxState.user.email})
            </div>
          ) : (
            // we can display two different things depending on whether the user is logged in
            <div> Need to log in </div>
          )}

          <div>
            <div className="imageBehindTextContact">Support & Contact</div>
            <br />
            <br />

            <br />
            <br />

            <div
              className="aboutUsText"
              style={{textAlign: 'right', fontWeight: 'bold'}}
            >
              <div style={{textAlign: 'center'}}>
                Contact us if you have any questions!
              </div>
              <br />
              partnerships@jdb.com
              <br />
              media@jdb.com
              <br />
              realestate@jdb.com
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
