export enum ActionType {
  SetSelectedCategory,
  SetSection,
}

export interface SetSelectedCategory {
  type: ActionType.SetSelectedCategory
  payload: string
}

export interface SetSection {
  type: ActionType.SetSection
  payload: string
}

export type AppActions = SetSelectedCategory | SetSection
