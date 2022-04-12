import { RoutePayload } from '../interfaces/enum'

export enum ActionType {
  SetSelectedCategory,
  SetSection,
}

export enum NavigateActionType {
  SetRoute,
}

export interface SetSelectedCategory {
  type: ActionType.SetSelectedCategory
  payload: string
}

export interface SetRoute {
  type: NavigateActionType.SetRoute
  payload: RoutePayload
}

export type AppActions = SetSelectedCategory

export type NavigationActions = SetRoute
