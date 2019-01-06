import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
`

const Buttons = ({ running, seconds, start, stop, reset }) => {
  return (
    <ButtonWrap>
      <Button disabled={running} onClick={start}>
        Start clock
      </Button>
      <Button disabled={!running} onClick={stop}>
        Stop clock
      </Button>
      <Button disabled={seconds === 0} onClick={reset}>
        Reset clock
      </Button>
    </ButtonWrap>
  )
}

export default Buttons
