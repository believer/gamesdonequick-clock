import React from 'react'
import 'styled-components/macro'

const Runner = ({ runner, updateRunner }) => {
  return (
    <div
      css={`
        border: 2px solid rgba(119, 206, 251, 0.8);
        box-shadow: 0 0 4px 2px rgba(119, 206, 251, 0.4),
          inset 0 0 4px 2px rgba(119, 206, 251, 0.2);
        margin-bottom: 10px;
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
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          padding: 10px 0;
        `}
      >
        <input
          css={`
            background: none;
            border: 0;
            color: #fff;
            display: block;
            font-size: 24px;
            font-weight: 400;
            text-align: center;
            text-shadow: 0px 0px 15px rgb(119, 206, 251);
          `}
          onChange={updateRunner}
          placeholder="Insert runners name"
          type="text"
          value={runner}
        />
      </div>
    </div>
  )
}

export default Runner
