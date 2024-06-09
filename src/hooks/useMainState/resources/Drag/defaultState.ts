import type { SimpleForceMagnitude } from "../SimpleForce/SimpleForce_types"
import type { DragDensity, DragState } from "./Drag_types"

export const dragMagnitudeDefaultState: SimpleForceMagnitude = {
  magnitude: 0.47
}

export const dragDensityDefaultState: DragDensity = {
  density: 1.293
}

export const dragDefaultState: DragState = {
  ...dragMagnitudeDefaultState,
  ...dragDensityDefaultState,
  id: "",
  name: "",
  type: "drag"
}

export function createDragState(): DragState {
  const state = { ...dragDefaultState }
  state.id = crypto.randomUUID()

  return state
}
