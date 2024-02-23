import { createContext, useReducer } from "react"
import type {
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
// -- Check if the new collection is already in the list --

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
// --------------------------------------------------------
