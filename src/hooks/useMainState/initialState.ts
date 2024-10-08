import { ballDefaultState } from "./resources/Balls/defaultState"
import { simulationDefaultState } from "./resources/Simulation/defaultState"
import { simulationWindowDefaultState } from "./resources/SimulationWindow/defaultState"
import type { MainState } from "./useMainState_types"

// ------------------ Initial State -----------------------
const initialState: MainState = {
  simulationWindow: [{ ...simulationWindowDefaultState }],
  linechart: [],
  dataoutput: [],
  order: [
    { id: "simulationWindow", type: "simulationWindow" },
    { id: "balls", type: "balls" }
  ],
  time: {
    continuous: true,
    time: 10,
    dt: 10,
    delay: 0
  },
  container: [],
  obstacle: [],
  balls: [{ ...ballDefaultState }],
  localGravity: [],
  drag: [],
  electric: [],
  gravity: [],
  damping: [],
  velocityVector: [],
  accelerationVector: [],
  simulation: { ...simulationDefaultState },
  rod: [],
  spring: [],
  rope: [],
  sheet: []
}

// --------------------------------------------------------

export default initialState
