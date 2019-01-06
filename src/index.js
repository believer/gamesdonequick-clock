import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background-color: rgb(7, 15, 19);
    display: flex;
    font-family: 'Source Code Pro', monospace;
    font-weight: 400;
    height: 100vh;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
)
