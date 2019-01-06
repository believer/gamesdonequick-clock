import React from 'react'
import styled from 'styled-components/macro'

const TimerWrap = styled.div`
  color: rgb(119, 206, 251);
  font-size: 50px;
  font-weight: 400;
  left: 50%;
  position: absolute;
  text-shadow: 0px 0px 10px rgb(119, 206, 251);
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const addLeadingZero = time => (time < 10 ? `0${time}` : time)

const Timer = ({ hours, minutes, seconds, hundreths }) => {
  return (
    <TimerWrap>
      {hours > 0 && <span>{addLeadingZero(hours)}:</span>}
      {addLeadingZero(minutes)}:{addLeadingZero(seconds)}
      <span
        css={`
          font-size: 28px;
        `}
      >
        .{hundreths}
      </span>
    </TimerWrap>
  )
}

export default Timer
