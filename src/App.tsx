/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense, useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Widget from './components/WidgetOpen/WidgetOpenHOC'
import Loader from './components/UI/Loader'

export type AppConfig = {
  websiteId: string
}

export interface IProps {
  config: AppConfig
}

const LazyWidget = React.lazy(
  () => import('./components/WidgetOpen/WidgetOpenHOC')
)

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
        <Suspense fallback={<Loader />}>
          <LazyWidget />
        </Suspense>
      )}
    </>
  )
}

export default App
