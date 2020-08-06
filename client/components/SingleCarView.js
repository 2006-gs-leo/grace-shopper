import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

export class SingleCarView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log('The single car view component is mounted!')
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <div className="singleViewNavbar">
          <Link to="/overview" className="singleViewNavbarLink">
            Overview
          </Link>
          <div className="textSeparator">|</div>
          <Link to="/reviews" className="singleViewNavbarLink">
            Reviews
          </Link>
          <div className="textSeparator">|</div>
          <Link to="/safety" className="singleViewNavbarLink">
            Safety
          </Link>
          <div className="textSeparator">|</div>
          <Link to="/warranty" className="singleViewNavbarLink">
            Warranty
          </Link>
        </div>
        <div className="singleViewOverlay">
          <div>2020 Chevrolet Impala</div>
          <div>
            Price:
            <br />
            -$31,620-
          </div>
          <div>
            Miles:
            <br />
            -305-
          </div>
        </div>
        <div className="singleViewFirstSection">
          <img
            className="singleViewBackgroundImage"
            src="https://image.freepik.com/free-photo/3d-render-background-car_54981-80.jpg"
          />
          <div className="moreDetails">↓ Scroll for more details</div>
        </div>

        <div className="singleViewDivider">===</div>

        <div className="singleViewSecondSection">
          <div className="singleViewDescriptionPrice">
            <div>
              <b>Description:</b>
              <br />
              Everything seems within reach, except for the payment platform.
              That means, Stripe, Google Pay, Apple Pay, or Venmo. The other
              challenges are storing cookies and setting local storage (being
              able to log in as a user or administrator, which allows you to
              access the orders in your cart), as well as web security against
              random API requests.
            </div>
            <div>
              <b>Price:</b>
              <br />
              -110-
            </div>
            <button id="addToCartButton" type="button">
              Add to Cart
            </button>
          </div>
          <div className="highlightsTitle">Highlights</div>
          <div className="singleViewHighlights">
            <div>Highlight 1</div>
            <div>Highlight 2</div>
          </div>
          <div className="singleViewDetails">
            <div>Engine Type</div>
            <div>MPG</div>
            <div>Exterior Color</div>
            <div>Interior Color</div>
            <div>Transmission</div>
            <div>Drivetrain</div>
            <div>Doors</div>
            <div>Number of keys</div>
            <div>VIN</div>
            <div>Stock #</div>
          </div>
        </div>
        <div id="footer" className="footerSingleView">
          <Link to="/about" className="footer">
            About Us
          </Link>
          |
          <Link to="/contact" className="footer">
            Contact
          </Link>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(SingleCarView)
