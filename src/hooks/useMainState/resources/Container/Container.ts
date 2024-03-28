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
import type { ContainerKeys, ContainerState } from "./Container_types"
import { containerDefaultState } from "./defaultState"

// --------------------------------------------------------
// -------------- Container reducer slices ----------------

export function containerNew(
  state: MainState,
  payload: Record<string, unknown>
): MainState {
  if (!isCollection<ContainerState>(payload, containerDefaultState))
    return state
  if (isInCollection(payload.id, payload.type, state)) return state

  const newState = { ...state }

  newState.container.push(payload)
  newState.order.push({
    type: "container",
    id: payload.id
  })

  return newState
}

export const containerPositionX = generateByKey("positionX")
export const containerPositionY = generateByKey("positionY")
export const containerWidth = generateByKey("width")
export const containerHeight = generateByKey("height")
export const containerBorderColor = generateByKey("borderColor")
export const containerBorderWidth = generateByKey("borderWidth")
export const containerBorderOpacity = generateByKey("borderOpacity")
export const containerFillColor = generateByKey("fillColor")
export const containerFillOpacity = generateByKey("fillOpacity")
export const containerShape = generateByKey("shape")
export const containerAngle = generateByKey("angle")

// --------------------------------------------------------
// ---------------- Generation function -------------------

function generateByKey(key: ContainerKeys): ReducerSlice {
  return (state, payload) => {
    // ----------- Guard conditions ---------------
    // Makes sure the payload contains the necessary data
    if (!isCollectionOrder(payload)) return state
    if (!isInCollection(payload.id, payload.type, state)) return state
    if (payload.type !== "container") return state
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
// ---- Returns the corresponding container collection ----

export function getContainerCollection(
  item: CollectionOrder,
  state: MainState
): ContainerState | undefined {
  if (!isCollectionOrder(item)) return
  if (!isInCollection(item.id, item.type, state)) return
  if (item.type !== "container") return

  return state[item.type].find(
    (collection) => collection.id === item.id && collection.type === item.type
  )
}

// --------------------------------------------------------
