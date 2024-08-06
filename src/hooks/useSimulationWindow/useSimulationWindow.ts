import { useEffect, type RefObject, useContext, type Dispatch } from "react"
import { mainStateContext } from "../useMainState/useMainState"
import { graph2D } from "scigrapher"
import type { Graph2D } from "scigrapher/lib/es5/Graph2D/Graph2D_Types"
import type { SimulationWindowState } from "../useMainState/resources/SimulationWindow/SimulationWindow_types"
import type { MainStateAction } from "../useMainState/useMainState_types"
import {
  setColor,
  setData,
  setDomain,
  setGrid,
  setMargin,
  setSize
} from "../../auxiliary/simulationUpdate"

function useSimulationWindow(
  graphElement: RefObject<HTMLDivElement>,
  getGraphElement: (element: HTMLDivElement) => void
): void {
  const { mainState, dispatch } = useContext(mainStateContext)
  const simulationCollection = mainState.simulationWindow[0]
  const simulationString = JSON.stringify(simulationCollection)
  const containers = JSON.stringify(mainState.container)
  const obstacles = JSON.stringify(mainState.obstacle)
  const balls = JSON.stringify(mainState.balls[0].data)
  const velocityVector = JSON.stringify(mainState.velocityVector)
  const accelerationVector = JSON.stringify(mainState.accelerationVector)
  const isRunning = mainState.simulation.run
  const localGravity = JSON.stringify(mainState.localGravity)
  const gravity = JSON.stringify(mainState.gravity)
  const electric = JSON.stringify(mainState.electric)
  const drag = JSON.stringify(mainState.drag)
  const damping = JSON.stringify(mainState.damping)

  useEffect(() => {
    if (graphElement.current == null) return
    if (isRunning) return

    graphElement.current.replaceChildren()

    const graph = graph2D(graphElement.current)

    setSize(graph, simulationCollection)
    setDomain(graph, simulationCollection)
    setMargin(graph, simulationCollection)
    setAspectRatio(graph, simulationCollection, dispatch)
    setColor(graph, simulationCollection)
    setGrid(graph, simulationCollection)
    setData(graph, mainState)

    graph.draw()
  }, [
    graphElement,
    simulationString,
    simulationCollection,
    dispatch,
    mainState,
    containers,
    obstacles,
    balls,
    velocityVector,
    accelerationVector,
    isRunning,
    localGravity,
    gravity,
    electric,
    damping,
    drag
  ])

  useEffect(() => {
    if (graphElement.current == null) return
    getGraphElement(graphElement.current)
  }, [graphElement, getGraphElement])
}

export default useSimulationWindow

// --------------------------------------------------------
// ------------------ Set Aspect Ratio --------------------

function setAspectRatio(
  graph: Graph2D,
  config: SimulationWindowState,
  dispatch: Dispatch<MainStateAction>
): void {
  if (!config.setAspectRatio) return

  const yDomain = graph.axisDomain().y
  const anchor = yDomain.start + (yDomain.end - yDomain.start) / 2
  graph.aspectRatio({ anchor, ratio: 1, source: "x", target: "y" })

  const newYDomain = graph.axisDomain().y

  dispatch({
    type: "graphic@startY",
    payload: {
      type: "simulationWindow",
      id: "simulationWindow",
      startY: newYDomain.start
    }
  })
  dispatch({
    type: "graphic@endY",
    payload: {
      type: "simulationWindow",
      id: "simulationWindow",
      endY: newYDomain.end
    }
  })
  dispatch({
    type: "graphic@aspectRatio",
    payload: {
      type: "simulationWindow",
      id: "simulationWindow",
      setAspectRatio: false
    }
  })
}

// --------------------------------------------------------
