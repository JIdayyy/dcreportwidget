/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloProvider } from '@apollo/client'
import React, { useEffect, useReducer, useState } from 'react'
// import './App.css'
import WidgetPortal from './components/Portal'
import initializeCustomApolloClient from './services/graphql'
import appReducer from './context/reducers/AppReducer'
import { AppContext, AppContextDefault } from './context/AppContext'
import WidgetOpenHOC from './components/WidgetOpen/WidgetOpenHOC'

const client = initializeCustomApolloClient()

function App(): JSX.Element {
  const [state, dispatch] = useReducer(appReducer, AppContextDefault)
  const [isClient, setIsClient] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient && (
        <ApolloProvider client={client}>
          <AppContext.Provider value={{ state, dispatch }}>
            <WidgetPortal>
              <WidgetOpenHOC />
            </WidgetPortal>
          </AppContext.Provider>
        </ApolloProvider>
      )}
    </>
  )
}

export default App
