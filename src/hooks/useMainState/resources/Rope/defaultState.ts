import type { RopePosition, RopeShape, RopeState } from "./Rope_types"

export const ropePositionDefaultState: RopePosition = {
  positionX: 0,
  positionY: 0
}

export const ropeShapeDefaultState: RopeShape = {
  angle: 0,
  length: 4,
  nodes: 10
}

export const ropeDefaultState: RopeState = {
  ...ropePositionDefaultState,
  ...ropeShapeDefaultState,
  rod: "",
  balls: [],
  type: "rope",
  id: "",
  name: ""
}

export function createRopeState(): RopeState {
  const newState = { ...ropeDefaultState }
  newState.balls = []
  newState.id = crypto.randomUUID()

  return newState
}
