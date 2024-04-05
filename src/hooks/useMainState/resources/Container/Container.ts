import {
  createSimpleSlice,
  isCollection,
  isInCollection
} from "../../useMainState"
import type { MainState } from "../../useMainState_types"
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

export const containerPositionX = createSimpleSlice<ContainerKeys>(
  "positionX",
  "container"
)
export const containerPositionY = createSimpleSlice<ContainerKeys>(
  "positionY",
  "container"
)
export const containerWidth = createSimpleSlice<ContainerKeys>(
  "width",
  "container"
)
export const containerHeight = createSimpleSlice<ContainerKeys>(
  "height",
  "container"
)
export const containerBorderColor = createSimpleSlice<ContainerKeys>(
  "borderColor",
  "container"
)
export const containerBorderWidth = createSimpleSlice<ContainerKeys>(
  "borderWidth",
  "container"
)
export const containerBorderOpacity = createSimpleSlice<ContainerKeys>(
  "borderOpacity",
  "container"
)
export const containerFillColor = createSimpleSlice<ContainerKeys>(
  "fillColor",
  "container"
)
export const containerFillOpacity = createSimpleSlice<ContainerKeys>(
  "fillOpacity",
  "container"
)
export const containerShape = createSimpleSlice<ContainerKeys>(
  "shape",
  "container"
)
export const containerAngle = createSimpleSlice<ContainerKeys>(
  "angle",
  "container"
)
export const containerRatioLock = createSimpleSlice<ContainerKeys>(
  "ratioLock",
  "container"
)

// --------------------------------------------------------
