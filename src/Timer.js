import React, { Component } from 'react'
import styled from 'styled-components'

const TimerWrap = styled.div`
  color: rgb(119, 206, 251);
  font-family: 'Source Code Pro', monospace;
  font-size: 50px;
  font-weight: 400;
  left: 50%;
  position: absolute;
  text-shadow: 0px 0px 10px rgb(119, 206, 251);
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const Hundreths = styled.span`
  font-size: 28px;
`

class Timer extends Component {
  addLeadingZero(time) {
    return time < 10 ? `0${time}` : time
  }

  render() {
    const { hours, minutes, seconds, hundreths } = this.props

    return (
      <TimerWrap>
        {hours > 0 && <span>{this.addLeadingZero(hours)}:</span>}
        {this.addLeadingZero(minutes)}:{this.addLeadingZero(seconds)}
        <Hundreths>.{hundreths}</Hundreths>
      </TimerWrap>
    )
  }
}

export default Timer
