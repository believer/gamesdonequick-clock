import React from 'react'
import styled from 'styled-components'

const RunnerWrap = styled.div`
  border: 2px solid rgba(119, 206, 251, 0.8);
  box-shadow: 0 0 4px 2px rgba(119, 206, 251, 0.4),
    inset 0 0 4px 2px rgba(119, 206, 251, 0.2);
  margin-bottom: 10px;
  padding-left: 6px;
  padding-right: 6px;
`

const RunnerInner = styled.div`
  border-left: 2px solid rgba(119, 206, 251, 0.8);
  border-right: 2px solid rgba(119, 206, 251, 0.8);
  box-shadow: 0 0 4px 2px rgba(119, 206, 251, 0.4),
    inset 0 0 4px 2px rgba(119, 206, 251, 0.2);
  box-sizing: border-box;
  display: block;
  color: #fff;
  font-family: 'Source Code Pro', monospace;
  font-size: 24px;
  font-weight: 400;
  padding: 10px 0;
  text-align: center;
  text-shadow: 0px 0px 15px rgb(119, 206, 251);
  text-transform: uppercase;
`

const Runner = () => {
  return (
    <RunnerWrap>
      <RunnerInner>believer</RunnerInner>
    </RunnerWrap>
  )
}

export default Runner
