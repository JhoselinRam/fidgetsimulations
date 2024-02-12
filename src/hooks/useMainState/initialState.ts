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
    ],
    linechart: [
      {
        positionX: 800,
        positionY: 100,
        height: 300,
        width: 300,
        id: "linechart_1",
        type: "linechart",
        startX: -4,
        endX: 6,
        startY: -2,
        endY: 8
      }
    ],
    dataoutput: [
      {
        positionX: 700,
        positionY: 500,
        height: 300,
        width: 300,
        id: "data_1",
        type: "dataoutput",
        startX: -4,
        endX: 6,
        startY: -2,
        endY: 8
      }
    ]
  },
  order: [
    { id: "simulationWindow", type: "simulationWindow" },
    { id: "linechart_1", type: "linechart" },
    { id: "data_1", type: "dataoutput" }
  ],
  time: {
    continuous: true,
    time: 10,
    dt: 0.1,
    delay: 0
  }
}

// --------------------------------------------------------

export default initialState
