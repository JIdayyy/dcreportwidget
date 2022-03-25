export enum ActionType {
  SetSelectedCategory,
}

export interface SetSelectedCategory {
  type: ActionType.SetSelectedCategory
  payload: string
}

export type AppActions = SetSelectedCategory
