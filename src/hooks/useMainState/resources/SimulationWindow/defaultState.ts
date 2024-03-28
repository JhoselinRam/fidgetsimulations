import type { SimulationWindowState } from "./SimulationWindow_types"

export const simulationWindowDefaultState: SimulationWindowState = {
  positionX: 0,
  positionY: 0,
  height: 501,
  width: 501,
  id: "simulationWindow",
  type: "simulationWindow",
  name: "Simulation",
  startX: -5,
  endX: 5,
  startY: -5,
  endY: 5,
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
