import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
export class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    console.log('The main page component is mounted!')
  }
  handleClick(e) {
    console.log(e.target.id)
    this.props.history.push(`/SingleCarView/${e.target.id}`)
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <select name="cars" id="cars" className="select-css">
          <option value="Price">Price</option>
          <option value="Make">Make</option>
          <option value="Model">Model</option>
          <option value="Date_Added">Date Added</option>
          <option value="Average_Rating">Average Rating</option>
        </select>
        <input className="mainInput" type="text" placeholder="Search.." />
        <div id="appDiv" className="flex-container-main">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => {
            return (
              <div key={i} id={i} onClick={event => this.handleClick(event)}>
                <img
                  key={i}
                  id={i}
                  className="imgMain"
                  src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                />
              </div>
            )
          })}
        </div>
        <div>
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
      </div>
    )
  }
}
export default connect(null, null)(MainPage)
