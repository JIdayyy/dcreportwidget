import { createContext, Dispatch } from 'react'
import { AppActions } from './Actions'

export interface AppState {
  category: string
  section: string
}

export const AppContextDefault: AppState = {
  category: '',
  section: '',
}

export const AppContext = createContext<{
  state: AppState
  dispatch: Dispatch<AppActions>
}>({
  state: AppContextDefault,
  dispatch: () => undefined,
})
