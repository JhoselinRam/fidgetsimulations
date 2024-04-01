import { toRounded } from "../../../../auxiliary/toRounded"
import {
  isCollection,
  isCollectionOrder,
  isInCollection
} from "../../useMainState"
import type {
  CollectionOrder,
  MainState,
  ReducerSlice
} from "../../useMainState_types"
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

export const obstaclePositionX = generateByKey("positionX")
export const obstaclePositionY = generateByKey("positionY")
export const obstacleWidth = generateByKey("width")
export const obstacleHeight = generateByKey("height")
export const obstacleBorderColor = generateByKey("borderColor")
export const obstacleBorderWidth = generateByKey("borderWidth")
export const obstacleBorderOpacity = generateByKey("borderOpacity")
export const obstacleFillColor = generateByKey("fillColor")
export const obstacleFillOpacity = generateByKey("fillOpacity")
export const obstacleShape = generateByKey("shape")
export const obstacleAngle = generateByKey("angle")
export const obstacleRatioLock = generateByKey("ratioLock")

// --------------------------------------------------------
// ---------------- Generation function -------------------

function generateByKey(key: ObstacleKeys): ReducerSlice {
  return (state, payload) => {
    // ----------- Guard conditions ---------------
    // Makes sure the payload contains the necessary data
    if (!isCollectionOrder(payload)) return state
    if (!isInCollection(payload.id, payload.type, state)) return state
    if (payload.type !== "obstacle") return state
    if (!(key in payload)) return state

    const index = state[payload.type].findIndex(
      (collection) =>
        collection.id === payload.id && collection.type === payload.type
    )
    const collection = state[payload.type][index]

    // Checks if the key exist in the collection
    if (!(key in collection)) return state
    const validKey = key as keyof typeof collection

    // Check if the data actually change
    if (typeof payload[validKey] !== typeof collection[validKey]) return state

    if (typeof payload[validKey] === "number") {
      ;(payload[validKey] as number) = toRounded(
        payload[validKey] as number,
        import.meta.env.VITE_ROUNDED_DECIMALS
      )
    }

    if (payload[validKey] === collection[validKey]) return state

    // Generate the new state
    const newState = { ...state }
    ;(newState[payload.type][index][validKey] as unknown) = payload[validKey]

    return newState
  }
}

// --------------------------------------------------------
// ---- Returns the corresponding obstacle collection ----

export function getObstacleCollection(
  item: CollectionOrder,
  state: MainState
): ObstacleState | undefined {
  if (!isCollectionOrder(item)) return
  if (!isInCollection(item.id, item.type, state)) return
  if (item.type !== "obstacle") return

  return state[item.type].find(
    (collection) => collection.id === item.id && collection.type === item.type
  )
}

// --------------------------------------------------------
