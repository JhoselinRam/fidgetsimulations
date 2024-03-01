import {
  isCollectionOrder,
  isCollectionState,
  isInCollection
} from "../../useMainState"
import type { CollectionOrder, MainState } from "../../useMainState_types"

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
// --------------- Reorder Collection ---------------------

export function collectionReorder(
  state: MainState,
  payload: Record<string, unknown>
): MainState {
  if (typeof payload !== "object") return state
  if (!("order" in payload)) return state
  if (!isCollectionArray(payload.order)) return state
  if (!containsAllCollections(payload.order, state.order)) return state

  const newState = { ...state }

  newState.order = payload.order

  return newState
}

// --------------------------------------------------------

// --------------------------------------------------------
// ----- Check if data is an array of CollectionOrder -----

function isCollectionArray(data: unknown): data is CollectionOrder[] {
  if (data == null) return false
  if (!Array.isArray(data)) return false

  let result = true

  data.forEach((element) => {
    if (!isCollectionOrder(element)) result = false
  })

  return result
}

// --------------------------------------------------------
// -- Check if data contains all the collection elements --

function containsAllCollections(
  data: CollectionOrder[],
  source: CollectionOrder[]
): boolean {
  if (data.length !== source.length) return false

  let result = true

  source.forEach((collection) => {
    const index = data.findIndex(
      (target) => target.id === collection.id && target.type === collection.type
    )
    if (index === -1) result = false
  })

  return result
}

// --------------------------------------------------------
// --------------------------------------------------------
