import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }
  html, body, #root {
    min-height: 100vh;
    height: 100%;
    background-color: #f5f5f5;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    color: #333;
    font-family: 'Noto Sans', sans-serif;
  }
  input, button, textarea {
    font-family: 'Noto Sans', sans-serif;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #333;
  }
`

export default GlobalStyle
