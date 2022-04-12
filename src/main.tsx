import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const config = {
  websiteId: '5e8f8f8f-8f8f-8f8f-8f8f-8f8f8f8f8f8f',
}

ReactDOM.render(
  <StrictMode>
    <App config={config} />
  </StrictMode>,
  document.getElementById('root')
)
