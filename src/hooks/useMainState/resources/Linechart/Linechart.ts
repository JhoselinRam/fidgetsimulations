import { isInCollection } from "../../useMainState"
import type { MainState } from "../../useMainState_types"
import type { LinechartState } from "./LineChart_types"
import { linechartDefaultState } from "./defaultState"

// ------------------ New Linechart -----------------------
export function linechartNew(
  state: MainState,
  payload: Record<string, unknown>
): MainState {
  if (!isLinechart(payload)) return state
  if (isInCollection(payload.id, "linechart", state)) return state

  const newState = { ...state }

  newState.linechart.push(payload)
  newState.order.push({
    type: "linechart",
    id: payload.id
  })

  return newState
}

// --------------------------------------------------------
// --------------------------------------------------------

// Checks if the payload contains all the necessary data
function isLinechart(payload: unknown): payload is LinechartState {
  if (payload == null) return false
  if (typeof payload !== "object") return false

  const stateKeys = Object.keys(linechartDefaultState)
  let keysInPayload = true

  stateKeys.forEach((key) => {
    if (key in payload) return
    keysInPayload = false
  })

  return keysInPayload
}

// --------------------------------------------------------
