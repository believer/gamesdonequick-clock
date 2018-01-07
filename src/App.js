import React, { Component } from 'react'
import styled from 'styled-components'
import ClockColumn from './ClockColumn'
import Buttons from './Buttons'
import Timer from './Timer'
import Runner from './Runner'

export const Wrapper = styled.div`
  border: 2px solid rgba(119, 206, 251, 0.8);
  box-shadow: 0 0 4px 2px rgba(119, 206, 251, 0.4),
    inset 0 0 4px 2px rgba(119, 206, 251, 0.2);
  padding-left: 6px;
  padding-right: 6px;
`

const InnerWrapper = styled.div`
  border-left: 2px solid rgba(119, 206, 251, 0.8);
  border-right: 2px solid rgba(119, 206, 251, 0.8);
  box-shadow: 0 0 4px 2px rgba(119, 206, 251, 0.4),
    inset 0 0 4px 2px rgba(119, 206, 251, 0.2);
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 3px;
  padding: 4px;
  position: relative;
  width: 600px;
  z-index: 1;
`

class Clock extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    hundreths: 0,
    running: false
  }

  startClock = () => {
    this.timer = setInterval(() => {
      this.setState(state => {
        let { hours, minutes, seconds, hundreths } = state

        hundreths = state.hundreths + 1

        if (hundreths > 9) {
          hundreths = 0
          seconds = seconds + 1
        }

        if (seconds > 59) {
          seconds = 0
          minutes = minutes + 1
        }

        if (minutes > 59) {
          minutes = 0
          hours = hours + 1
        }

        return {
          hundreths,
          seconds,
          minutes,
          hours,
          running: true
        }
      })
    }, 100)
  }

  stopClock = () => {
    clearInterval(this.timer)

    this.setState(() => ({
      running: false
    }))
  }

  resetClock = () => {
    this.stopClock()

    this.setState(() => ({
      hours: 0,
      minutes: 0,
      seconds: 0,
      hundreths: 0
    }))
  }

  splitTime(time, value = 0) {
    return time > 10 ? time.toFixed().split('')[value] : value === 0 ? 0 : time
  }

  render() {
    const { hours, minutes, seconds, hundreths, running } = this.state

    return (
      <div>
        <Runner />

        <Wrapper>
          <InnerWrapper>
            <Timer
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              hundreths={hundreths}
            />

            <ClockColumn highlight={hours} />
            <ClockColumn highlight={this.splitTime(minutes)} />
            <ClockColumn highlight={this.splitTime(minutes, 1)} />
            <ClockColumn highlight={this.splitTime(seconds)} />
            <ClockColumn highlight={this.splitTime(seconds, 1)} />
            <ClockColumn highlight={hundreths} />
          </InnerWrapper>
        </Wrapper>

        <Buttons
          reset={this.resetClock}
          running={running}
          seconds={seconds}
          start={this.startClock}
          stop={this.stopClock}
        />
      </div>
    )
  }
}

export default Clock
