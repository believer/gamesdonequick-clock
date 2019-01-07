import Game from './Game'
import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components/macro'
import ClockColumn from './ClockColumn'
import Buttons from './Buttons'
import Timer from './Timer'
import Runner from './Runner'
import { initialState, reducer } from './clockReducer'

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
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 3px;
  padding: 4px;
  position: relative;
  width: 600px;
  z-index: 1;
`

const splitTime = (time, value = 0) =>
  time >= 10 ? time.toFixed().split('')[value] : value === 0 ? 0 : time

const Clock = () => {
  const [
    { hours, minutes, seconds, hundreths, running, runner },
    dispatch,
  ] = useReducer(reducer, initialState)

  const stopClock = () => dispatch({ type: 'STOP' })
  const resetClock = () => dispatch({ type: 'RESET' })
  const startClock = () => dispatch({ type: 'START' })
  const updateRunner = e =>
    dispatch({ type: 'UPDATE_RUNNER', payload: e.target.value })

  useEffect(
    () => {
      let timer
      if (running) {
        timer = setInterval(() => {
          dispatch({ type: 'INCREMENT' })
        }, 100)
      }

      return () => clearInterval(timer)
    },
    [running]
  )

  return (
    <>
      <Runner runner={runner} updateRunner={updateRunner} />

      <Wrapper>
        <InnerWrapper>
          <Timer
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            hundreths={hundreths}
          />

          <ClockColumn highlight={hours} />
          <ClockColumn highlight={splitTime(minutes)} />
          <ClockColumn highlight={splitTime(minutes, 1)} />
          <ClockColumn highlight={splitTime(seconds)} />
          <ClockColumn highlight={splitTime(seconds, 1)} />
          <ClockColumn highlight={hundreths} />
        </InnerWrapper>
      </Wrapper>

      <Game />

      <Buttons
        reset={resetClock}
        running={running}
        seconds={seconds}
        start={startClock}
        stop={stopClock}
      />

      <div
        css={`
          margin-top: 60px;
          text-align: center;
        `}
      >
        <a
          css={`
            color: #fff;
          `}
          href="https://github.com/believer/gamesdonequick-clock"
          rel="noopener noreferrer"
          target="_blank"
        >
          Code on GitHub
        </a>
      </div>
    </>
  )
}

export default Clock
