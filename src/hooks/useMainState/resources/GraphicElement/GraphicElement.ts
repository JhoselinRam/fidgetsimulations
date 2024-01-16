import type { ReducerSlice } from "../../useMainState_types"
import type { GraphicElementType, GraphicKeys } from "./GraphicElement_types"

// ------------- Main area reducer slices -----------------

export const graphicElementPositionX = generateByKey("positionX")
export const graphicElementPositionY = generateByKey("positionY")
export const graphicElementWidth = generateByKey("width")
export const graphicElementHeight = generateByKey("height")

// --------------------------------------------------------
// --------------- Generator function ---------------------

function generateByKey(key: GraphicKeys): ReducerSlice {
  return (state, payload) => {
    // ----------- Guard conditions ---------------
    // Makes sure the payload contains the necessary data
    if (
      typeof payload !== "object" ||
      typeof payload.id !== "string" ||
      typeof payload.type !== "string"
    )
      return { ...state }

    // Checks that the type is in the main state graphical elements
    if (!(payload.type in state.graphElements)) return { ...state }

    // Finds the graphic element to change
    const graphicType = payload.type as GraphicElementType
    const index = state.graphElements[graphicType].findIndex(
      (element) => element.id === payload.id
    )

    // Guard
    if (index === -1) return { ...state }

    // Generate the new state
    const newState = { ...state }
    ;(newState.graphElements[graphicType][index][key] as unknown) = payload[key]

    return newState
  }
}

// --------------------------------------------------------
