import type {
  ObstacleAngle,
  ObstacleBorder,
  ObstacleFill,
  ObstaclePosition,
  ObstacleRatioLock,
  ObstacleShape,
  ObstacleSize,
  ObstacleState
} from "./Obstacle_types"

export const obstaclePositionDefaultState: ObstaclePosition = {
  positionX: -2,
  positionY: 2
}

export const obstacleSizeDefaultState: ObstacleSize = {
  width: 4,
  height: 4
}

export const obstacleBorderDefaultState: ObstacleBorder = {
  borderColor: "#000000",
  borderOpacity: 1,
  borderWidth: 2
}

export const obstacleFillDefaultState: ObstacleFill = {
  fillColor: "#000000",
  fillOpacity: 0.6
}

export const obstacleShapeDefaultState: ObstacleShape = {
  shape: "rectangle"
}

export const obstacleAngleDefaultState: ObstacleAngle = {
  angle: 0
}

export const obstacleRatioLockDefaultState: ObstacleRatioLock = {
  ratioLock: false
}

export const obstacleDefaultState: ObstacleState = {
  ...obstaclePositionDefaultState,
  ...obstacleSizeDefaultState,
  ...obstacleBorderDefaultState,
  ...obstacleFillDefaultState,
  ...obstacleShapeDefaultState,
  ...obstacleAngleDefaultState,
  ...obstacleRatioLockDefaultState,
  type: "obstacle",
  name: "",
  id: ""
}

export function createObstacleState(): ObstacleState {
  const state = { ...obstacleDefaultState }
  state.id = crypto.randomUUID()

  return state
}
