import React from 'react'
import App, { AppConfig } from './App'

export const Widget = (config: AppConfig): JSX.Element => (
  <App config={config} />
)

export default App

export { default as App } from './App'
