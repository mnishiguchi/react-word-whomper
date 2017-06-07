import React from 'react'
import PropTypes from 'prop-types'

class Timer extends React.Component {

  static defaultProps = {
    seconds: PropTypes.number.required,
    pause: PropTypes.any,
    onTimeUp: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      secondsRemaining: this.props.seconds || 60
    }

    this.tick = this.tick.bind(this)
  }

  render() {
    return (
      <div>Seconds Remaining: {this.state.secondsRemaining}</div>
    )
  }

  componentDidUpdate() {
    if (this.state.secondsRemaining === 0) {
      this.stop()

      // Delay 1 sec because we want to see the timer becomes 0.
      setTimeout(() => {
        if (this.props.onTimeUp) {
          this.props.onTimeUp()
        }
      }, 1000)
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    this.setState((prevState, props) => {
      return { secondsRemaining: prevState.secondsRemaining - 1 }
    })
  }

  start() {
    this.interval = setInterval(this.tick, 1000)
  }

  stop() {
    clearInterval(this.interval)
  }

  reset() {
    this.setState((prevState, props) => {
      return { secondsRemaining: this.props.seconds }
    })
  }
}

export default Timer
