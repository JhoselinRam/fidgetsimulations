import type { SimulationWindowState } from "../../hooks/useMainState/resources/SimulationWindow/SimulationWindow_types"

export const simulationWindowDefaultState: SimulationWindowState = {
  positionX: 0,
  positionY: 0,
  height: 501,
  width: 501,
  id: "simulationWindow",
  type: "simulationWindow",
  name: "Simulation",
  startX: -4,
  endX: 6,
  startY: -2,
  endY: 8
}
