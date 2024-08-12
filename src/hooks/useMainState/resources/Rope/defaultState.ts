import {
  ballChargeDefaultState,
  ballColorDefaultState
} from "../Balls/defaultState"
import type {
  RopeCharge,
  RopeColor,
  RopeMass,
  RopePosition,
  RopeRadius,
  RopeShape,
  RopeState,
  RopeVelocity
} from "./Rope_types"

export const ropePositionDefaultState: RopePosition = {
  positionX: 0,
  positionY: 0
}

export const ropeShapeDefaultState: RopeShape = {
  angle: 0,
  length: 4,
  nodes: 10
}

export const ropeVelocityDefaultState: RopeVelocity = {
  velocityX: 0,
  velocityY: 0
}

export const ropeMassDefaultState: RopeMass = {
  mass: 1
}

export const ropeRadiusDefaultState: RopeRadius = {
  radius: 0.1
}

export const ropeChargeDefaultState: RopeCharge = {
  charge: ballChargeDefaultState.charge
}

export const ropeColorDefaultState: RopeColor = {
  color: ballColorDefaultState.color
}

export const ropeDefaultState: RopeState = {
  ...ropePositionDefaultState,
  ...ropeShapeDefaultState,
  ...ropeVelocityDefaultState,
  ...ropeMassDefaultState,
  ...ropeRadiusDefaultState,
  ...ropeChargeDefaultState,
  ...ropeColorDefaultState,
  type: "rope",
  id: "",
  name: ""
}

export function createRopeState(): RopeState {
  const newState = { ...ropeDefaultState }
  newState.id = crypto.randomUUID()

  return newState
}
