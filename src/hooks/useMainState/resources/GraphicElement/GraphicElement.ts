import { toRounded } from "../../../../auxiliary/toRounded"
import {
  isCollectionOrder,
  isGraphicalCollection,
  isInCollection
} from "../../useMainState"
import type { ReducerSlice } from "../../useMainState_types"
import type { GraphicKeys } from "./GraphicElement_types"

// ------------- Main area reducer slices -----------------

export const graphicElementPositionX = generateByKey("positionX")
export const graphicElementPositionY = generateByKey("positionY")
export const graphicElementWidth = generateByKey("width")
export const graphicElementHeight = generateByKey("height")
export const graphicElementManualEdit = generateByKey("manualEdit")
export const graphicElementLockRatio = generateByKey("lockRatio")

// --------------------------------------------------------
// --------------- Generator function ---------------------

function generateByKey(key: GraphicKeys): ReducerSlice {
  return (state, payload) => {
    // ----------- Guard conditions ---------------
    // Makes sure the payload contains the necessary data
    if (!isCollectionOrder(payload)) return state
    if (!isGraphicalCollection(payload.type)) return state
    if (!isInCollection(payload.id, payload.type, state)) return state
    if (!(key in payload)) return state

    // Finds the graphic element to change
    const index = state[payload.type].findIndex(
      (collection) =>
        collection.id === payload.id && collection.type === payload.type
    )

    if (typeof payload[key] !== typeof state[payload.type][index][key])
      return state
    if (payload[key] === state[payload.type][index][key]) return state

    if (typeof payload[key] === "number") {
      ;(payload[key] as number) = toRounded(
        payload[key] as number,
        import.meta.env.VITE_ROUNDED_DECIMALS
      )
    }

    // Generate the new state
    const newState = { ...state }
    ;(newState[payload.type][index][key] as unknown) = payload[key]

    return newState
  }
}

// --------------------------------------------------------
