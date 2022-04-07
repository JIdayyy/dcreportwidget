import { ActionType, AppActions } from '../Actions'
import { AppState } from '../AppContext'

function appReducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case ActionType.SetSelectedCategory:
      return { ...state, category: action.payload }

    case ActionType.SetSection:
      return { ...state, section: action.payload }

    default:
      return state
  }
}
export default appReducer
