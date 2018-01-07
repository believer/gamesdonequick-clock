import React, { Component } from 'react'
import styled from 'styled-components'

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
`

const Button = styled.button`
  appearance: none;
  background-color: rgba(119, 206, 251, 0.3);
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 14px;
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  padding: 10px 20px;
  transition: background-color 150ms ease-in-out;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? 'rgba(119, 206, 251, 0.3)' : 'rgba(119, 206, 251, 0.8)'};
  }

  &:focus {
    outline: none;
  }
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
