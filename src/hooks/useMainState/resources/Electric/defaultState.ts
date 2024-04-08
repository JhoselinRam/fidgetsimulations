import type { SimpleForceMagnitude } from "../SimpleForce/SimpleForce_types"
import type { ElectricState } from "./Electric_types"

export const electricMagnitudeDefaultState: SimpleForceMagnitude = {
  magnitude: 8.9896e9
}

export const electricDefaultState: ElectricState = {
  ...electricMagnitudeDefaultState,
  id: "",
  name: "",
  type: "electric"
}

export function createElectricState(): ElectricState {
  const state = { ...electricDefaultState }
  state.id = crypto.randomUUID()

  return state
}
