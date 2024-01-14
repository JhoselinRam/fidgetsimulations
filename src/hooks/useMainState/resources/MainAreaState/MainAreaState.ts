import type { ReducerSlice } from "../../useMainState_types"
import type { MainAreaKeys } from "./MainAreaState_types"

// ------------- Main area reducer slices -----------------

export const mainAreaPositionX = generateByKey("positionX")
export const mainAreaPositionY = generateByKey("positionY")
export const mainAreaWidth = generateByKey("width")
export const mainAreaHeight = generateByKey("height")

// --------------------------------------------------------
// --------------- Generator function ---------------------

function generateByKey(key: MainAreaKeys): ReducerSlice {
  return (state, payload) => {
    // Guard condition
    if (
      typeof payload !== "object" ||
      typeof payload[key] !== typeof state.mainArea[key]
    )
      return { ...state }

    // Generates the new state
    const newState = { ...state }
    ;(newState.mainArea[key] as unknown) = payload[key]

    return newState
  }
}

// --------------------------------------------------------
