import React from 'react'
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
      </div>
    )
  }
}

export default connect(null, null)(MainPage)
