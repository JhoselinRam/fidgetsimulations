import { memo, useContext, useRef } from "react"
import { graph2D } from "scigrapher"
import WindowElement from "../WindowElement/WindowElement"
import { mainAreaContext } from "../MainArea/context"
import type { WindowElementRef } from "../WindowElement/WindowElement_types"
import type { Graph2D } from "scigrapher/lib/es5/Graph2D/Graph2D_Types"

const SimulationWindow = memo((): JSX.Element => {
  const mainAreaElement = useContext(mainAreaContext)
  const windowHandlers = useRef<WindowElementRef | null>(null)
  const graph = useRef<Graph2D | null>(null)
  const domainX = {
    start: -2,
    end: 8
  }
  const domainY = {
    start: -5,
    end: 5
  }

  // Sets the graph object
  function setupGraphWindow(element: HTMLDivElement): void {
    graph.current = graph2D(element)
      .axisDomain({ x: domainX, y: domainY })
      .containerResize({ preserveAspectRatio: false })
      .draw()
  }

  // Sets the resize handler of the WindowElement component
  function setupWindowHandlers(handlers: WindowElementRef): void {
    if (handlers == null) return

    windowHandlers.current = handlers

    // This function will be call every time the window is resize to synchronize the graph size
    handlers.onWindowResize((_, { width, height }) => {
      if (graph.current == null) return

      let dpi = window.devicePixelRatio
      const domain = graph.current.axisDomain()

      // Adjust the size and axis domain of the graph depending on the device pixel ratio
      // This is a know bug of the scigrapher library
      if (dpi < 1) {
        const domainSizeX = domainX.end - domainX.start
        const domainSizeY = domainY.end - domainY.start

        domain.x.end = domainX.end + domainSizeX * (1 - dpi)
        domain.y.start = domainY.start - domainSizeY * (1 - dpi)
        dpi = 1
      }

      // Update the graph size
      graph.current
        .containerSize({ width: width * dpi, height: height * dpi })
        .axisDomain(domain)
        .draw()
    })
  }

  return (
    <WindowElement mainAreaElement={mainAreaElement} ref={setupWindowHandlers}>
      <div ref={setupGraphWindow}></div>
    </WindowElement>
  )
})

SimulationWindow.displayName = "SimulationWindow"

export default SimulationWindow
