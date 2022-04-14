/* eslint-disable import/no-cycle */
import { ApolloProvider } from '@apollo/client'
import React, { useReducer, useState } from 'react'
import { AppContext, AppContextDefault } from '../../context/AppContext'
import appReducer from '../../context/reducers/AppReducer'
import routeReducer from '../../context/reducers/RoutesReducer'
import {
  RoutesContext,
  RoutesContextDefault,
} from '../../context/RoutesContext'
import { client } from '../../services/graphql'
import WidgetPortal from '../Portal'
import ClosedWidgetButton from '../UI/ClosedWidget.button'
import Widget from '../Widget'

const WidgetOpen = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [appState, dispatchAppState] = useReducer(appReducer, AppContextDefault)
  const [routesState, dispatchRouteState] = useReducer(
    routeReducer,
    RoutesContextDefault
  )

  if (isOpen)
    return (
      <ApolloProvider client={client}>
        <AppContext.Provider
          value={{ state: appState, dispatch: dispatchAppState }}
        >
          <RoutesContext.Provider
            value={{ state: routesState, dispatch: dispatchRouteState }}
          >
            <WidgetPortal>
              <Widget setIsOpen={setIsOpen} />
            </WidgetPortal>
          </RoutesContext.Provider>
        </AppContext.Provider>
      </ApolloProvider>
    )

  return <ClosedWidgetButton setIsOpen={setIsOpen} />
}

export default WidgetOpen
