import type { Dispatch } from "react"
import type {
  MainAreaState,
  MainAreaStateActionType
} from "./resources/MainAreaState/MainAreaState_types"

// Type of the useMainState hook
export interface UseMainState {
  mainState: MainState
  dispatch: Dispatch<MainStateAction>
}

// All actions available
export type MainStateActionType = MainAreaStateActionType

// Main state type
export interface MainState {
  mainArea: MainAreaState
}

// Action type
export interface MainStateAction {
  type: MainStateActionType
  payload?: Record<string, unknown>
}

export type ReducerObject = {
  [k in MainAreaStateActionType]: ReducerSlice
}

export type ReducerSlice = (
  state: MainState,
  payload: Record<string, unknown> | undefined
) => MainState
