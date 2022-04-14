import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const config = {
  websiteId: 'acc029c4-5979-40e7-b4bd-9bd9774ac773',
  userId: 'ec963414-6aef-4856-be61-76827d19db7f',
}

ReactDOM.render(
  <StrictMode>
    <App config={config} />
  </StrictMode>,
  document.getElementById('root')
)
