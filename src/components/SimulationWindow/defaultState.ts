import type { SimulationWindowState } from "../../hooks/useMainState/resources/SimulationWindow/SimulationWindow_types"

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
  setAspectRatio: false
}
