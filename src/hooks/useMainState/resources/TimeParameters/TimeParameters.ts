import type { ReducerSlice } from "../../useMainState_types"
import type { TimeKeys } from "./TimeParameters_types"

// --------------- Time reducer slices --------------------

export const timeParameterTime = generateByNumericKey("time")
export const timeParameterDT = generateByNumericKey("dt")
export const timeParameterDelay = generateByNumericKey("delay")
export const timeParameterContinuous = generateByNumericKey("continuous")

// --------------------------------------------------------
// --------------- Generator function ---------------------
function generateByNumericKey(key: TimeKeys): ReducerSlice {
  return (state, payload) => {
    // ----------- Guard condition ---------------
    // Makes sure the payload contains the necessary data
    if (
      typeof payload !== "object" ||
      (key === "continuous" && typeof payload.value !== "boolean") ||
      (key !== "continuous" && typeof payload.value !== "number")
    )
      return state
    if (state.time[key] === payload.value) return state

    // Generate the new state
    const newState = { ...state }
    ;(newState.time[key] as unknown) = payload.value

    return newState
  }
}

// --------------------------------------------------------
