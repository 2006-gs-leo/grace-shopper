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
        You have reached the How It Works Page!
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
            <div className="howItWorksStyled">
              <span className="singleLetter" value="H">
                H
              </span>
              <span className="singleLetter" value="o">
                o
              </span>
              <span className="singleLetter" value="w">
                w
              </span>
              <span className="singleLetter" value=" ">
                {' '}
              </span>
              <span className="singleLetter" value="i">
                i
              </span>
              <span className="singleLetter" value="t">
                t
              </span>
              <span className="singleLetter" value=" ">
                {' '}
              </span>
              <span className="singleLetter" value="W">
                W
              </span>
              <span className="singleLetter" value="o">
                o
              </span>
              <span className="singleLetter" value="r">
                r
              </span>
              <span className="singleLetter" value="k">
                k
              </span>
              <span className="singleLetter" value="s">
                s
              </span>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="aboutUsText">
              At JDB Cars, you can search through our database by make or other
              characteristics. On the single car view you will find more details
              and an Add to Cart feature, as well as an Edit Cart feature. In
              order to use these, you should be logged in. If you don't have an
              account, you should sign up. That is why we have those 'Need to
              log in' messages at the top of various screens, to indicate that
              you should log in. On the Cart view, you can view your items, edit
              them and check them out.
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
