/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloProvider } from '@apollo/client'
import React, { lazy, useEffect, useReducer, useState } from 'react'
import './App.css'
import './index.css'
import WidgetPortal from './components/Portal'
import initializeCustomApolloClient from './services/graphql'
import appReducer from './context/reducers/AppReducer'
import { AppContext, AppContextDefault } from './context/AppContext'
import WidgetOpenHOC from './components/WidgetOpen/WidgetOpenHOC'

const client = initializeCustomApolloClient()

function App(): JSX.Element {
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true)
    }
  }, [])

  return (
    <>
      {isClient && (
        <WidgetPortal>
          <WidgetOpenHOC />
        </WidgetPortal>
      )}
    </>
  )
}

export default App
