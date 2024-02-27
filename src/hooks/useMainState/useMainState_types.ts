import type { Dispatch } from "react"
import type {
  GraphicActionType,
  GraphicElementType,
  GraphicalElementsState
} from "./resources/GraphicElement/GraphicElement_types"
import type {
  TimeActionType,
  TimeState
} from "./resources/TimeParameters/TimeParameters_types"
import type { LinechartActionType } from "./resources/Linechart/LineChart_types"
import type { DataOutputActionType } from "./resources/DataOutput/DataOutput_types"
import type { CollectionActionType } from "./resources/Collection/Collection_types"

// Type of the useMainState hook
export interface UseMainState {
  mainState: MainState
  dispatch: Dispatch<MainStateAction>
}

// All actions available
export type MainStateActionType =
  | GraphicActionType
  | TimeActionType
  | LinechartActionType
  | DataOutputActionType
  | CollectionActionType

// Main state type
export interface MainState extends GraphicalElementsState {
  order: CollectionOrder[]
  time: TimeState
}

// Action type
export interface MainStateAction {
  type: MainStateActionType
  payload: Record<string, unknown>
}

// Type of the reducer object
export type ReducerObject = {
  [k in MainStateActionType]: ReducerSlice
}

// Type pf the reducer slice function
export type ReducerSlice = (
  state: MainState,
  payload: Record<string, unknown>
) => MainState

export type CollectionType = GraphicElementType

export interface CollectionState extends CollectionOrder {
  name: string
}

export interface CollectionOrder {
  id: string
  type: CollectionType
}
