import { useEffect, type RefObject, useContext, type Dispatch } from "react"
import { mainStateContext } from "../useMainState/useMainState"
import { graph2D } from "scigrapher"
import type { Graph2D } from "scigrapher/lib/es5/Graph2D/Graph2D_Types"
import type { SimulationWindowState } from "../useMainState/resources/SimulationWindow/SimulationWindow_types"
import type { MainStateAction } from "../useMainState/useMainState_types"

function useSimulationWindow(graphElement: RefObject<HTMLDivElement>): void {
  const { mainState, dispatch } = useContext(mainStateContext)
  const simulationCollection = mainState.simulationWindow[0]
  const simulationString = JSON.stringify(simulationCollection)

  useEffect(() => {
    if (graphElement.current == null) return

    graphElement.current.replaceChildren()

    const graph = graph2D(graphElement.current)

    setSize(graph, simulationCollection)
    setDomain(graph, simulationCollection)
    setMargin(graph, simulationCollection)
    setAspectRatio(graph, simulationCollection, dispatch)

    graph.draw()
  }, [graphElement, simulationString, simulationCollection, dispatch])
}

export default useSimulationWindow

// --------------------------------------------------------
// ------------------- Axis Domain ------------------------
function setDomain(graph: Graph2D, config: SimulationWindowState): void {
  const domainX = { start: config.startX, end: config.endX }
  const domainY = { start: config.startY, end: config.endY }

  graph.axisDomain({ x: domainX, y: domainY })
}
// --------------------------------------------------------
// ----------------- Container Size -----------------------
function setSize(graph: Graph2D, config: SimulationWindowState): void {
  let dpi = window.devicePixelRatio

  dpi = dpi < 1 ? 1 : dpi

  graph.containerSize({
    width: config.width * dpi,
    height: config.height * dpi
  })
}
// --------------------------------------------------------
// -------------------- Set Margin ------------------------

function setMargin(graph: Graph2D, config: SimulationWindowState): void {
  const dpi = window.devicePixelRatio
  let marginX = 0
  let marginY = 0

  if (dpi < 1) {
    marginX = config.width * (1 - dpi)
    marginY = config.height * (1 - dpi)
  }

  graph.margin({ x: { end: marginX }, y: { start: marginY } })
}

// --------------------------------------------------------
// --------------------------------------------------------

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
