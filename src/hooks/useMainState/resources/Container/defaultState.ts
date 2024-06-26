import type {
  ContainerAngle,
  ContainerBorder,
  ContainerFill,
  ContainerPosition,
  ContainerRatioLock,
  ContainerShape,
  ContainerSize,
  ContainerState
} from "./Container_types"

export const containerPositionDefaultState: ContainerPosition = {
  positionX: -5,
  positionY: 5
}

export const containerSizeDefaultState: ContainerSize = {
  width: 10,
  height: 10
}

export const containerBorderDefaultState: ContainerBorder = {
  borderColor: "#000000",
  borderOpacity: 1,
  borderWidth: 2
}

export const containerFillDefaultState: ContainerFill = {
  fillColor: "#000000",
  fillOpacity: 0
}

export const containerShapeDefaultState: ContainerShape = {
  shape: "rectangle"
}

export const containerAngleDefaultState: ContainerAngle = {
  angle: 0
}

export const containerRatioLockDefaultState: ContainerRatioLock = {
  ratioLock: false
}

export const containerDefaultState: ContainerState = {
  ...containerPositionDefaultState,
  ...containerSizeDefaultState,
  ...containerBorderDefaultState,
  ...containerFillDefaultState,
  ...containerShapeDefaultState,
  ...containerAngleDefaultState,
  ...containerRatioLockDefaultState,
  type: "container",
  name: "",
  id: ""
}

export function createContainerState(): ContainerState {
  const state = { ...containerDefaultState }
  state.id = crypto.randomUUID()

  return state
}
