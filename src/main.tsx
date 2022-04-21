import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const config = {
  websiteId: 'aede2270-c4eb-49d8-a430-d754adfd992b',
}

ReactDOM.render(
  <StrictMode>
    <App config={config} />
  </StrictMode>,
  document.getElementById('root')
)
