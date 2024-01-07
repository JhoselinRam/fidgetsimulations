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

  function setupGraphWindow(element: HTMLDivElement): void {
    graph.current = graph2D(element)
  }

  function setupWindowHandlers(handlers: WindowElementRef): void {
    if (handlers == null) return

    windowHandlers.current = handlers
    handlers.onWindowResize((_, { width, height }) => {
      if (graph.current == null) return

      graph.current.containerSize({ width, height }).draw()
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
