/* eslint-disable import/no-cycle */
import { createContext, Dispatch } from 'react'
import Choices from '../components/Choices'
import { TRoute } from '../interfaces/routes'
import { NavigationActions } from './Actions'

export const RoutesContextDefault: TRoute = {
  path: '/',
  component: Choices,
  name: 'HOME',
}

export const RoutesContext = createContext<{
  state: TRoute
  dispatch: Dispatch<NavigationActions>
}>({
  state: RoutesContextDefault,
  dispatch: () => undefined,
})
