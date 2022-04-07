/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloProvider } from '@apollo/client'
import React, { Suspense, useEffect, useReducer, useState } from 'react'
import './App.css'
import WidgetPortal from './components/Portal'
import initializeCustomApolloClient from './services/graphql'
import appReducer from './context/reducers/AppReducer'
import { AppContext, AppContextDefault } from './context/AppContext'

const LazyWidget = React.lazy(() => import('./components/Widget/index'))

const client = initializeCustomApolloClient()

function App(): JSX.Element {
  const [state, dispatch] = useReducer(appReducer, AppContextDefault)
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <ApolloProvider client={client}>
      <AppContext.Provider value={{ state, dispatch }}>
        <WidgetPortal>
          <Suspense fallback={<div>loading</div>}>
            {isClient && <LazyWidget />}
          </Suspense>
        </WidgetPortal>
      </AppContext.Provider>
    </ApolloProvider>
  )
}

export default App
