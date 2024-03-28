import type { LinechartState } from "./LineChart_types"

export const linechartDefaultState: LinechartState = {
  positionX: 0,
  positionY: 0,
  height: 300,
  width: 300,
  id: "",
  name: "",
  type: "linechart",
  startX: 0,
  endX: 10,
  startY: 0,
  endY: 10,
  lockRatio: false,
  manualEdit: false,
  setAspectRatio: false,
  background: "#ffffff",
  colorX: "#000000",
  opacityX: 1,
  colorY: "#000000",
  opacityY: 1,
  gridPrimaryEnable: true,
  gridPrimaryColor: "#000000",
  gridSecondaryEnable: true,
  gridSecondaryColor: "#000000"
}

export function createLinechartState(): LinechartState {
  const newState = { ...linechartDefaultState }

  newState.id = crypto.randomUUID()
  newState.positionX = Math.random() * 500
  newState.positionY = Math.random() * 500

  return newState
}
