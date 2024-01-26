import { createContext, useReducer } from "react"
import type {
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

// ------------------ Initial State -----------------------
const initialState: MainState = {
  graphElements: {
    simulationWindow: [
      {
        positionX: 0,
        positionY: 0,
        height: 501,
        width: 501,
        id: "simulationWindow",
        type: "simulationWindow",
        startX: -4,
        endX: 6,
        startY: -2,
        endY: 8
      }
    ]
  },
  order: [{ id: "simulationWindow", type: "simulationWindow" }]
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
  "graphic@positionX": graphicElementPositionX,
  "graphic@positionY": graphicElementPositionY,
  "graphic@width": graphicElementWidth,
  "graphic@height": graphicElementHeight
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
