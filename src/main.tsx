import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const config = {
  websiteId: '729ccb1b-3c65-478a-8657-9674244a5314',
}

ReactDOM.render(
  <StrictMode>
    <App config={config} />
  </StrictMode>,
  document.getElementById('root')
)
