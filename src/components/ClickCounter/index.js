// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {Count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`prevState value ${prevState.Count}`)
      return {Count: prevState.Count + 1}
    })
  }

  render() {
    const {Count} = this.state
    return (
      <div className="mainDivision">
        <h1 className="heading">
          The Button has been clicked
          <span>{Count}</span> times
        </h1>
        <p className="paragraph">Click the button to increase the count</p>
        <button
          className="btnprimary"
          type="button"
          onClick={this.onIncrement}
          text="Click Me"
        >
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
