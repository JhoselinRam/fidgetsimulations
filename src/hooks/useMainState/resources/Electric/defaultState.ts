import type { SimpleForceMagnitude } from "../SimpleForce/SimpleForce_types"
import type { ElectricState } from "./Electric_types"

export const electricDefaultMagnitudeState: SimpleForceMagnitude = {
  magnitude: 8.9896e9
}

export const electricDefaultState: ElectricState = {
  ...electricDefaultMagnitudeState,
  id: "",
  name: "",
  type: "electric"
}

export function createElectricState(): ElectricState {
  const state = { ...electricDefaultState }
  state.id = crypto.randomUUID()

  return state
}
