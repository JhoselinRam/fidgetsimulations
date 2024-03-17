import { toRounded } from "../../../../auxiliary/toRounded"
import {
  isCollectionOrder,
  isGraphicalCollection,
  isInCollection
} from "../../useMainState"
import type {
  CollectionOrder,
  MainState,
  ReducerSlice
} from "../../useMainState_types"
import type { LinechartState } from "../Linechart/LineChart_types"
import type { SimulationWindowState } from "../SimulationWindow/SimulationWindow_types"
import type { GraphicElementType, GraphicKeys } from "./GraphicElement_types"

// ------------- Main area reducer slices -----------------

export const graphicElementPositionX = generateByKey("positionX", [
  "simulationWindow",
  "linechart",
  "dataoutput"
])
export const graphicElementPositionY = generateByKey("positionY", [
  "simulationWindow",
  "linechart",
  "dataoutput"
])
export const graphicElementWidth = generateByKey("width", [
  "simulationWindow",
  "linechart",
  "dataoutput"
])
export const graphicElementHeight = generateByKey("height", [
  "simulationWindow",
  "linechart",
  "dataoutput"
])
export const graphicElementManualEdit = generateByKey("manualEdit", [
  "simulationWindow",
  "linechart",
  "dataoutput"
])
export const graphicElementLockRatio = generateByKey("lockRatio", [
  "simulationWindow",
  "linechart",
  "dataoutput"
])
export const graphicStartX = generateByKey("startX", [
  "simulationWindow",
  "linechart"
])
export const graphicStartY = generateByKey("startX", [
  "simulationWindow",
  "linechart"
])
export const graphicEndX = generateByKey("endX", [
  "simulationWindow",
  "linechart"
])
export const graphicEndY = generateByKey("endX", [
  "simulationWindow",
  "linechart"
])

// --------------------------------------------------------
// --------------- Generator function ---------------------

function generateByKey(
  key: GraphicKeys,
  allowedTypes: GraphicElementType[]
): ReducerSlice {
  return (state, payload) => {
    // ----------- Guard conditions ---------------
    // Makes sure the payload contains the necessary data
    if (!isCollectionOrder(payload)) return state
    if (!isGraphicalCollection(payload.type)) return state
    if (!isInCollection(payload.id, payload.type, state)) return state
    if (!(key in payload)) return state

    let isAllowedType = false
    allowedTypes.forEach((type) => {
      if (type === payload.type) isAllowedType = true
    })
    if (!isAllowedType) return state

    // Finds the graphic element to change
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
    if (payload[validKey] === collection[validKey]) return state

    if (typeof payload[validKey] === "number") {
      ;(payload[validKey] as number) = toRounded(
        payload[validKey] as number,
        import.meta.env.VITE_ROUNDED_DECIMALS
      )
    }

    // Generate the new state
    const newState = { ...state }
    ;(newState[payload.type][index][validKey] as unknown) = payload[validKey]

    return newState
  }
}

// --------------------------------------------------------
// -------- Returns a given chart like collection ---------

export function getChartCollection(
  item: CollectionOrder,
  state: MainState
): SimulationWindowState | LinechartState | undefined {
  if (!isCollectionOrder(item)) return
  if (!isGraphicalCollection(item.type)) return
  if (!isInCollection(item.id, item.type, state)) return
  if (item.type !== "simulationWindow" && item.type !== "linechart") return

  return state[item.type].find(
    (collection) => collection.id === item.id && collection.type === item.type
  )
}

// --------------------------------------------------------
