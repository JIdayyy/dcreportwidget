/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense, useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Widget from './components/WidgetOpen/WidgetOpenHOC'

export type AppConfig = {
  websiteId: string
}

export interface IProps {
  config: AppConfig
}

const App: React.FC<IProps> = ({ config }) => {
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true)
    }
  }, [])

  return <>{isClient && <Widget />}</>
}

export default App
