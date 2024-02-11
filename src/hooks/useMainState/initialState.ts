import type { MainState } from "./useMainState_types"

// ------------------ Initial State -----------------------
const initialState: MainState = {
  graphElements: {
    simulationWindow: [
      {
        positionX: 0,
        positionY: 0,
        height: 501,
        width: 501,
        id: "simulationWindow",
        type: "simulationWindow",
        startX: -4,
        endX: 6,
        startY: -2,
        endY: 8
      }
    ]
  },
  order: [{ id: "simulationWindow", type: "simulationWindow" }],
  time: {
    continuous: true,
    time: 10,
    dt: 0.1,
    delay: 0
  }
}

// --------------------------------------------------------

export default initialState
