// Write your code here
import './index.css'
import {Component} from 'react'
class Speedometer extends Component {
  state = {speed: 0}
  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevstate => ({speed: prevstate.speed + 10}))
    }
  }
  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevstate => ({speed: prevstate.speed - 10}))
    }
  }
  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading1">SPEEDOMETER</h1>
        <img
          className="image"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h2 className="heading2">Speed is {speed}mph</h2>
        <p className="caution">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btncontainer">
          <button
            className="Accelerate"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button className="Applybrake" type="button" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
