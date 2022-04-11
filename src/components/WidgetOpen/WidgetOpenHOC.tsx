import { ApolloProvider } from '@apollo/client'
import React, { Suspense, useReducer, useState } from 'react'
import { AppContext, AppContextDefault } from '../../context/AppContext'
import appReducer from '../../context/reducers/AppReducer'
import { client } from '../../services/graphql'
import WidgetPortal from '../Portal'
import ClosedWidgetButton from '../UI/ClosedWidget.button'
import Widget from '../Widget'

const LazyWidget = React.lazy(() => import('../Widget/index'))

const WidgetOpenHOC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [state, dispatch] = useReducer(appReducer, AppContextDefault)

  if (isOpen)
    return (
      <WidgetPortal>
        <Suspense fallback={<div>loading</div>}>
          <ApolloProvider client={client}>
            <AppContext.Provider value={{ state, dispatch }}>
              <Widget setIsOpen={setIsOpen} />
            </AppContext.Provider>
          </ApolloProvider>
        </Suspense>
      </WidgetPortal>
    )

  return <ClosedWidgetButton setIsOpen={setIsOpen} />
}

export default WidgetOpenHOC
