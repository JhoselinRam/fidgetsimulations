import type { Dispatch } from "react"
import type {
  GraphOrder,
  GraphicActionType,
  GraphicalElementsState
} from "./resources/GraphicElement/GraphicElement_types"
import type {
  TimeActionType,
  TimeState
} from "./resources/TimeParameters/TimeParameters_types"

// Type of the useMainState hook
export interface UseMainState {
  mainState: MainState
  dispatch: Dispatch<MainStateAction>
}

// All actions available
export type MainStateActionType = GraphicActionType | TimeActionType

// Main state type
export interface MainState {
  graphElements: GraphicalElementsState
  order: GraphOrder[]
  time: TimeState
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
