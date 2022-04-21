/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, Suspense, useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Widget from './components/WidgetOpen/WidgetOpenHOC'

export type AppConfig = {
  websiteId: string
}

export interface IProps {
  config: AppConfig
}

export const WidgetConfigContext = createContext({
  websiteId: '',
})

const App: React.FC<IProps> = ({ config }) => {
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true)
    }
  }, [])

  return (
    <>
      {isClient && (
        <WidgetConfigContext.Provider value={{ websiteId: config.websiteId }}>
          <Widget />
        </WidgetConfigContext.Provider>
      )}
    </>
  )
}

export default App
