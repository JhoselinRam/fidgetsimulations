import {
  isCollectionOrder,
  isCollectionState,
  isInCollection
} from "../../useMainState"
import type { MainState } from "../../useMainState_types"

// ------------------ Delete Collection -------------------

export function collectionDelete(
  state: MainState,
  payload: Record<string, unknown>
): MainState {
  if (!isCollectionOrder(payload)) return state
  if (!isInCollection(payload.id, payload.type, state)) return state
  if (payload.type === "simulationWindow") return state

  const newState = { ...state }

  // Delete the element from the order list
  const orderIndex = state.order.findIndex(
    (item) => item.id === payload.id && item.type === payload.type
  )
  newState.order.splice(orderIndex, 1)

  // Delete the actual element
  const elementIndex = state[payload.type].findIndex(
    (element) => element.id === payload.id
  )
  newState[payload.type].splice(elementIndex, 1)

  return newState
}

// --------------------------------------------------------
// ---------------- Rename Collection ---------------------

export function collectionRename(
  state: MainState,
  payload: Record<string, unknown>
): MainState {
  if (!isCollectionState(payload)) return state
  if (!isInCollection(payload.id, payload.type, state)) return state

  const newState = { ...state }
  const index = newState[payload.type].findIndex(
    (collection) =>
      collection.id === payload.id && collection.type === payload.type
  )
  newState[payload.type][index].name = payload.name

  return newState
}

// --------------------------------------------------------
