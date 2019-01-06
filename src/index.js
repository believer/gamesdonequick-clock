import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    align-items: center;
    background-color: rgb(7, 15, 19);
    display: flex;
    font-family: 'Source Code Pro', monospace;
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
