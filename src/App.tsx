/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloProvider } from '@apollo/client'
import React, { useReducer, useState } from 'react'
import './App.css'
import WidgetPortal from './components/Portal'
import Reports from './components/Report'
import initializeCustomApolloClient from './services/graphql'
import appReducer from './context/reducers/AppReducer'
import { AppContext, AppContextDefault } from './context/AppContext'

const client = initializeCustomApolloClient()

function App(): JSX.Element {
  const [section, setSection] = useState<string | null>(null)
  const [state, dispatch] = useReducer(appReducer, AppContextDefault)

  return (
    <ApolloProvider client={client}>
      <AppContext.Provider value={{ state, dispatch }}>
        <WidgetPortal>
          <div className="absolute bottom-10 flex flex-col items-center overflow-hidden shadow-md justify-start align-top right-10 bg-almost-white rounded-xl h-96 w-72">
            <div className="bg-blue-base h-1/3 flex flex-col justify-between align-middle items-start z-10 w-full text-white font-bold font-sans p-5">
              <p className="w-1/2">Welcome to DCReports 🐛</p>
              <p className="w-full text-sm font-normal">
                Here’s a few ways to connect with us
              </p>
            </div>
            {/* <Widget /> */}
            {!section && (
              <div className="w-full p-4 h-full">
                <button
                  onClick={() => setSection('bugreport')}
                  type="button"
                  className="bg-white text-left rounded-md shadow-sm px-2 py-1 text-base font-bold text-blue-base w-full"
                >
                  Report a bug
                </button>
              </div>
            )}
            {section === 'bugreport' && <Reports />}
            <div className="font-bold text-gray-700 p-1 text-xs">
              By digitalcopilote 🐛
            </div>
          </div>
        </WidgetPortal>
      </AppContext.Provider>
    </ApolloProvider>
  )
}

export default App
