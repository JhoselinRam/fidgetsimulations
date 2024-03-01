import { createContext, useReducer } from "react"
import type {
  CollectionOrder,
  CollectionState,
  CollectionType,
  MainState,
  MainStateAction,
  ReducerObject,
  UseMainState
} from "./useMainState_types"
import {
  graphicElementHeight,
  graphicElementPositionX,
  graphicElementPositionY,
  graphicElementWidth
} from "./resources/GraphicElement/GraphicElement"
import initialState from "./initialState"
import {
  timeParameterContinuous,
  timeParameterDT,
  timeParameterDelay,
  timeParameterTime
} from "./resources/TimeParameters/TimeParameters"
import { linechartNew } from "./resources/Linechart/Linechart"
import { dataOutputNew } from "./resources/DataOutput/DataOutput"
import {
  collectionDelete,
  collectionRename,
  collectionReorder
} from "./resources/Collection/Collection"

// -------------------- Hook body -------------------------

export default function useMainState(): UseMainState {
  const [mainState, dispatch] = useReducer(reducer, initialState)

  return {
    mainState,
    dispatch
  }
}

// --------------------------------------------------------
// ------------------ Reducer Object ----------------------

const reducerObject: ReducerObject = {
  "collection@delete": collectionDelete,
  "collection@rename": collectionRename,
  "collection@reorder": collectionReorder,
  "graphic@positionX": graphicElementPositionX,
  "graphic@positionY": graphicElementPositionY,
  "graphic@width": graphicElementWidth,
  "graphic@height": graphicElementHeight,
  "time@continuous": timeParameterContinuous,
  "time@time": timeParameterTime,
  "time@dt": timeParameterDT,
  "time@delay": timeParameterDelay,
  "linechart@new": linechartNew,
  "dataoutput@new": dataOutputNew
}

// --------------------------------------------------------
// ----------------- Reducer function ---------------------

function reducer(state: MainState, action: MainStateAction): MainState {
  return reducerObject[action.type](state, action.payload)
}

// --------------------------------------------------------
// ---------------- Main State Context --------------------

export const mainStateContext = createContext<UseMainState>({
  mainState: initialState,
  dispatch: () => false
})

// --------------------------------------------------------
// ------- Check if the collection is in the list ---------

export function isInCollection(
  id: string,
  type: CollectionType,
  state: MainState
): boolean {
  const index = state.order.findIndex(
    (item) => item.id === id && item.type === type
  )

  return index !== -1
}

// --------------------------------------------------------
// ----- Check if a string is a valid collection type -----

export function isCollectionType(type: string): type is CollectionType {
  return (
    type === "simulationWindow" || type === "linechart" || type === "dataoutput"
  )
}

// --------------------------------------------------------
// -- Checks if the data is a valid collection order type --

export function isCollectionOrder(data: unknown): data is CollectionOrder {
  if (data == null) return false
  if (typeof data !== "object") return false
  if (!("id" in data) || !("type" in data)) return false
  if (typeof data.id !== "string" || typeof data.type !== "string") return false

  return true
}

// --------------------------------------------------------
// --------------------------------------------------------

export function isCollectionState(data: unknown): data is CollectionState {
  if (!isCollectionOrder(data)) return false
  if (!("name" in data)) return false
  if (typeof data.name !== "string") return false

  return true
}

// --------------------------------------------------------
