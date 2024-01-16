import type { Dispatch } from "react"
import type {
  GraphicActionType,
  GraphicalElementsState
} from "./resources/GraphicElement/GraphicElement_types"

// Type of the useMainState hook
export interface UseMainState {
  mainState: MainState
  dispatch: Dispatch<MainStateAction>
}

// All actions available
export type MainStateActionType = GraphicActionType

// Main state type
export interface MainState {
  graphElements: GraphicalElementsState
}

// Action type
export interface MainStateAction {
  type: MainStateActionType
  payload?: Record<string, unknown>
}

// Type of the reducer object
export type ReducerObject = {
  [k in MainStateActionType]: ReducerSlice
}

// Type pf the reducer slice function
export type ReducerSlice = (
  state: MainState,
  payload: Record<string, unknown> | undefined
) => MainState
