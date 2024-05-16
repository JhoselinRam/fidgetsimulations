import type { ReducerSlice } from "../../useMainState_types"
import type {
  ValidPayloadType,
  VectorState,
  VectorStateKeys
} from "./Vector_types"

function generateVectorSlice<T>(prop: VectorStateKeys): ReducerSlice {
  return (state, payload) => {
    if (!isValidPayload(payload, prop)) return state
  }
}

function isValidPayload<T extends VectorStateKeys>(
  data: unknown,
  prop: T,
  sampleState: VectorState
): data is ValidPayloadType<T> {
  if (data == null) return false
  if (typeof data !== "object") return false
  if (!("id" in data)) return false
  if (typeof data.id !== "string") return false
  if (data.id !== "velocityVector" && data.id !== "accelerationVector")
    return false
  if (!(prop in data)) return false

  const key = prop as keyof typeof data
  if (typeof data[key] !== typeof sampleState[prop]) return false

  return true
}
