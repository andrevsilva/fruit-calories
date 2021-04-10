import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// style global
import GlobalStyle from './styles/Global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
