import { dataOutputDefaultState } from "../../../../components/DataOutput/defaultState"
import { isInCollection } from "../../useMainState"
import type { MainState } from "../../useMainState_types"
import type { DataOutputState } from "./DataOutput_types"

// ------------------ New DataOutput ----------------------
export function dataOutputNew(
  state: MainState,
  payload: Record<string, unknown>
): MainState {
  if (!isDataOutput(payload)) return state
  if (isInCollection(payload.id, "dataoutput", state)) return state

  const newState = { ...state }

  newState.dataoutput.push(payload)
  newState.order.push({
    type: "dataoutput",
    id: payload.id
  })

  return newState
}

// --------------------------------------------------------
// --------------------------------------------------------

// Checks if the payload contains all the necessary data
function isDataOutput(payload: unknown): payload is DataOutputState {
  if (payload == null) return false
  if (typeof payload !== "object") return false

  const stateKeys = Object.keys(dataOutputDefaultState)
  let keysInPayload = true

  stateKeys.forEach((key) => {
    if (key in payload) return
    keysInPayload = false
  })

  return keysInPayload
}
