import { simulationWindowDefaultState } from "./resources/SimulationWindow/defaultState"
import type { MainState } from "./useMainState_types"

// ------------------ Initial State -----------------------
const initialState: MainState = {
  simulationWindow: [{ ...simulationWindowDefaultState }],
  linechart: [],
  dataoutput: [],
  order: [{ id: "simulationWindow", type: "simulationWindow" }],
  time: {
    continuous: true,
    time: 10,
    dt: 0.1,
    delay: 0
  },
  container: [],
  obstacle: []
}

// --------------------------------------------------------

export default initialState
