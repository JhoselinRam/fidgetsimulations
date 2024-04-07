import type { SimpleForceMagnitude } from "../SimpleForce/SimpleForce_types"
import type { DragState } from "./Drag_types"

export const dragMagnitudeDefaultState: SimpleForceMagnitude = {
  magnitude: 0.1
}

export const dragDefaultState: DragState = {
  ...dragMagnitudeDefaultState,
  id: "",
  name: "",
  type: "drag"
}

export function createDragState(): DragState {
  const state = { ...dragDefaultState }
  state.id = crypto.randomUUID()

  return state
}
