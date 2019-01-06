import React, { useState } from 'react'
import styled from 'styled-components/macro'

const GameInfo = styled.div`
  background-color: #1f101f;
  border-left: 1px solid hsl(327, 80%, 25%);
  border-right: 1px solid hsl(327, 80%, 25%);
  padding: 6px;

  &:first-child {
    border-left: 0;
  }

  &:last-child {
    border-right: 0;
  }

  &:not(:last-child) {
    margin-right: 3px;
  }
`

const Input = styled.input`
  background: none;
  border: 0;
  color: #fff;
  display: block;
  text-align: center;
  text-shadow: 0px 0px 10px #fff;
  width: 100%;
`

const Game = () => {
  const [estimate, setEstimate] = useState('')
  const [platform, setPlatform] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [typeOfRun, setTypeOfRun] = useState('')

  return (
    <>
      <div
        css={`
          border: 2px solid rgba(119, 206, 251, 0.8);
          box-shadow: 0 0 4px 2px rgba(119, 206, 251, 0.4),
            inset 0 0 4px 2px rgba(119, 206, 251, 0.2);
          margin-top: 20px;
          padding-left: 6px;
          padding-right: 6px;
        `}
      >
        <div
          css={`
            border-left: 2px solid rgba(119, 206, 251, 0.8);
            border-right: 2px solid rgba(119, 206, 251, 0.8);
            box-shadow: 0 0 4px 2px rgba(119, 206, 251, 0.4),
              inset 0 0 4px 2px rgba(119, 206, 251, 0.2);
            padding: 6px;
          `}
        >
          <input
            css={`
              background: none;
              border: 0;
              color: rgb(119, 206, 251);
              display: block;
              font-size: 18px;
              text-align: center;
              text-shadow: 0px 0px 10px rgb(119, 206, 251);
              text-transform: uppercase;
              width: 100%;
            `}
            onChange={e => setTypeOfRun(e.target.value)}
            placeholder="Type of run (i.e. Any%)"
            type="text"
            value={typeOfRun}
          />
        </div>
      </div>
      <div
        css={`
          border: 2px solid hsl(327, 80%, 25%);
          box-shadow: 0 0 4px 2px hsl(327, 80%, 15%),
            inset 0 0 4px 2px hsl(327, 80%, 5%);
          margin-top: 10px;
          padding-left: 6px;
          padding-right: 6px;
          position: relative;
        `}
      >
        <div
          css={`
            border-left: 2px solid hsl(327, 80%, 25%);
            border-right: 2px solid hsl(327, 80%, 25%);
            box-shadow: 0 0 4px 2px hsl(327, 80%, 15%),
              inset 0 0 4px 2px hsl(327, 80%, 5%);
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          `}
        >
          <GameInfo>
            <Input
              id="platform"
              onChange={e => setPlatform(e.target.value)}
              placeholder="Platform"
              type="text"
              value={platform}
            />
          </GameInfo>
          <GameInfo>
            <Input
              id="releasedate"
              onChange={e => setReleaseDate(e.target.value)}
              placeholder="Release date"
              type="text"
              value={releaseDate}
            />
          </GameInfo>
          <GameInfo>
            <Input
              id="estimate"
              onChange={e => setEstimate(e.target.value)}
              placeholder="Estimate"
              type="text"
              value={estimate}
            />
          </GameInfo>
        </div>
      </div>
      <div
        css={`
          color: #fff;
          display: grid;
          font-size: 12px;
          grid-template-columns: repeat(3, 1fr);
          text-align: center;
          text-transform: uppercase;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 6px;
          text-shadow: 0px 0px 10px #fff;
        `}
      >
        <label htmlFor="platform">Platform</label>
        <label htmlFor="releasedate">Release date</label>
        <label htmlFor="estimate">Estimate</label>
      </div>
    </>
  )
}

export default Game
