import { createContext, useReducer } from "react"
import type {
  MainState,
  MainStateAction,
  ReducerObject,
  UseMainState
} from "./useMainState_types"
import {
  mainAreaHeight,
  mainAreaPositionX,
  mainAreaPositionY
} from "./resources/MainAreaState/MainAreaState"

// ------------------ Initial State -----------------------
const initialState: MainState = {
  mainArea: {
    positionX: 0,
    positionY: 0,
    height: 500,
    width: 500
  }
}

// --------------------------------------------------------
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
  "mainArea@positionX": mainAreaPositionX,
  "mainArea@positionY": mainAreaPositionY,
  "mainArea@sizeWidth": mainAreaHeight,
  "mainArea@sizeHeight": mainAreaHeight
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
// --------------------------------------------------------
