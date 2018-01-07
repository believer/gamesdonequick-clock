import React from 'react'
import styled from 'styled-components'

const ClockColumnWrap = styled.div`
  display: grid;
  grid-gap: 3px;
`

const ClockTile = styled.div`
  background-color: ${({ highlight }) =>
    highlight ? 'rgba(119, 206, 251, 0.4)' : 'rgb(20, 44, 50)'};
  height: 15px;
  transition: background-color 80ms ease-in-out;
`

const ClockColumn = ({ highlight }) => {
  const num = parseInt(highlight, 10)

  return (
    <ClockColumnWrap>
      <ClockTile highlight={num === 8 || num === 9} />
      <ClockTile highlight={num === 4 || num === 5 || num === 6 || num === 7} />
      <ClockTile highlight={num === 2 || num === 3 || num === 6 || num === 7} />
      <ClockTile highlight={num % 2 !== 0} />
    </ClockColumnWrap>
  )
}

export default ClockColumn
