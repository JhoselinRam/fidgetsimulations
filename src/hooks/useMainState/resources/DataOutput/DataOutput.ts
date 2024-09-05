import {
  createSimpleNewCollectionSlice,
  createSimpleSlice,
  isCollectionOrder,
  isInnerStateIdentifier
} from "../../useMainState"
import type { ReducerSlice } from "../../useMainState_types"
import type {
  DataOutputColumnKeys,
  DataOutputKeys,
  ValidDataOutputColumnPayload
} from "./DataOutput_types"
import {
  dataOutputDefaultState,
  xPositionColumnDefaultState
} from "./defaultState"

export const dataOutputNew = createSimpleNewCollectionSlice(
  "dataoutput",
  dataOutputDefaultState
)

export const dataOutputEnable = createSimpleSlice<DataOutputKeys>(
  "enable",
  "dataoutput"
)
export const dataOutputBalls = createSimpleSlice<DataOutputKeys>(
  "balls",
  "dataoutput"
)

export const dataOutputColumnName = generateDataOutputColumnSlice("name")
export const dataOutputColumnAbbreviation =
  generateDataOutputColumnSlice("abbreviation")
export const dataOutputColumnUnit = generateDataOutputColumnSlice("unit")
export const dataOutputColumnExpression =
  generateDataOutputColumnSlice("expression")
export const dataOutputColumnData = generateDataOutputColumnSlice("data")

// --------------------------------------------------------

export function generateDataOutputColumnSlice(
  key: DataOutputColumnKeys
): ReducerSlice {
  return (state, payload) => {
    if (!isDataOutputIdentifier(payload, key)) return state

    // Find correct data output collection
    const collectionIndex = state.dataoutput.findIndex(
      (collection) => collection.id === payload.id
    )
    if (collectionIndex === -1) return state

    // find correct column
    const columnIndex = state.dataoutput[collectionIndex].columns.findIndex(
      (column) => column.id === payload.columnId
    )
    if (columnIndex === -1) return state

    // Makes sure the value actually change
    if (
      state.dataoutput[collectionIndex].columns[columnIndex][key] ===
      payload[key]
    )
      return state

    // Update the state
    const newState = { ...state }
    ;(state.dataoutput[collectionIndex].columns[columnIndex][key] as unknown) =
      payload[key]

    return newState
  }
}

// --------------------------------------------------------
// --------------------------------------------------------

function isDataOutputIdentifier<U extends DataOutputColumnKeys>(
  data: unknown,
  key: U
): data is ValidDataOutputColumnPayload<U> {
  if (!isCollectionOrder(data)) return false
  if (!isInnerStateIdentifier(data, key, xPositionColumnDefaultState))
    return false
  if (!("columnId" in data)) return false

  return true
}

// --------------------------------------------------------
