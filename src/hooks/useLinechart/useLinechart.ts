import { useEffect, type RefObject, useContext } from "react"
import { mainStateContext } from "../useMainState/useMainState"
import { graph2D } from "scigrapher"
import type { Graph2D } from "scigrapher/lib/es5/Graph2D/Graph2D_Types"
import type { SimulationWindowState } from "../useMainState/resources/SimulationWindow/SimulationWindow_types"

function useLinechart(
  graphElement: RefObject<HTMLDivElement>,
  id: string
): void {
  const { mainState } = useContext(mainStateContext)

  useEffect(() => {
    // Guard conditions
    if (graphElement.current == null) return

    const index = mainState.graphElements.linechart.findIndex(
      (chart) => chart.id === id
    )
    if (index === -1) return

    // clean the last graph
    graphElement.current.replaceChildren()
    const graph = graph2D(graphElement.current)

    const config = mainState.graphElements.linechart[index]

    setSize(graph, config)
    setDomain(graph, config)

    graph.draw()
  }, [mainState, graphElement, id])
}

export default useLinechart

// --------------------------------------------------------
// ------------------- Axis Domain ------------------------
function setDomain(graph: Graph2D, config: SimulationWindowState): void {
  const dpi = window.devicePixelRatio
  const domainX = { start: config.startX, end: config.endX }
  const domainY = { start: config.startY, end: config.endY }

  if (dpi < 1) {
    const lengthX = domainX.end - domainX.start
    const lengthY = domainY.end - domainY.start

    domainX.end = domainX.end + lengthX * (1 - dpi)
    domainY.start = domainY.start - lengthY * (1 - dpi)
  }

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
