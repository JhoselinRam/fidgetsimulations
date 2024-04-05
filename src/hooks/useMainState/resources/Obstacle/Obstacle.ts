import {
  createSimpleSlice,
  isCollection,
  isInCollection
} from "../../useMainState"
import type { MainState } from "../../useMainState_types"
import type { ObstacleKeys, ObstacleState } from "./Obstacle_types"
import { obstacleDefaultState } from "./defaultState"

// --------------------------------------------------------
// -------------- Obstacle reducer slices ----------------

export function obstacleNew(
  state: MainState,
  payload: Record<string, unknown>
): MainState {
  if (!isCollection<ObstacleState>(payload, obstacleDefaultState)) return state
  if (isInCollection(payload.id, payload.type, state)) return state

  const newState = { ...state }

  newState.obstacle.push(payload)
  newState.order.push({
    type: "obstacle",
    id: payload.id
  })

  return newState
}

export const obstaclePositionX = createSimpleSlice<ObstacleKeys>(
  "positionX",
  "obstacle"
)
export const obstaclePositionY = createSimpleSlice<ObstacleKeys>(
  "positionY",
  "obstacle"
)
export const obstacleWidth = createSimpleSlice<ObstacleKeys>(
  "width",
  "obstacle"
)
export const obstacleHeight = createSimpleSlice<ObstacleKeys>(
  "height",
  "obstacle"
)
export const obstacleBorderColor = createSimpleSlice<ObstacleKeys>(
  "borderColor",
  "obstacle"
)
export const obstacleBorderWidth = createSimpleSlice<ObstacleKeys>(
  "borderWidth",
  "obstacle"
)
export const obstacleBorderOpacity = createSimpleSlice<ObstacleKeys>(
  "borderOpacity",
  "obstacle"
)
export const obstacleFillColor = createSimpleSlice<ObstacleKeys>(
  "fillColor",
  "obstacle"
)
export const obstacleFillOpacity = createSimpleSlice<ObstacleKeys>(
  "fillOpacity",
  "obstacle"
)
export const obstacleShape = createSimpleSlice<ObstacleKeys>(
  "shape",
  "obstacle"
)
export const obstacleAngle = createSimpleSlice<ObstacleKeys>(
  "angle",
  "obstacle"
)
export const obstacleRatioLock = createSimpleSlice<ObstacleKeys>(
  "ratioLock",
  "obstacle"
)

// --------------------------------------------------------
