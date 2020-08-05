import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

export class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    console.log('The main page component is mounted!')
  }

  render() {
    return (
      <div>
        <select name="cars" id="cars" className="select-css">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <input type="text" placeholder="Search.." />

        <div id="appDiv" className="flex-container">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(e => {
            return (
              <div key={e}>
                <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
              </div>
            )
          })}
        </div>
        <div id="footer">
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

export default connect(null, null)(MainPage)
