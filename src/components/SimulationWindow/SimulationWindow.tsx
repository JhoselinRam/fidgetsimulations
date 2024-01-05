import { memo, useContext, useRef } from "react"
import { graph2D } from "scigrapher"
import WindowElement from "../WindowElement/WindowElement"
import { mainAreaContext } from "../MainArea/context"
import type { WindowElementRef } from "../WindowElement/WindowElement_types"
import type { Graph2D } from "scigrapher/lib/es5/Graph2D/Graph2D_Types"

const SimulationWindow = memo((): JSX.Element => {
  const mainAreaElement = useContext(mainAreaContext)
  const windowHandlers = useRef<WindowElementRef | null>(null)
  const test = useRef<number>(500)
  const graph = useRef<Graph2D | null>(null)

  function setupGraphWindow(element: HTMLDivElement): void {
    graph.current = graph2D(element)
  }

  function setupWindowHandlers(handlers: WindowElementRef): void {
    if (handlers == null) return

    windowHandlers.current = handlers
    handlers.onWindowResize((_, { width, height }) => {
      if (graph.current == null) return
      console.dir(graph.current)
      graph.current.containerSize({ width, height }).draw()
    })
  }

  function handleTest(): void {
    if (windowHandlers.current == null) return

    test.current += 2
    windowHandlers.current.windowResize({ width: test.current })
  }

  return (
    <>
      <WindowElement
        mainAreaElement={mainAreaElement}
        ref={setupWindowHandlers}
      >
        <div ref={setupGraphWindow}></div>
      </WindowElement>
      <button onClick={handleTest} className="relative bottom-0 right-0 z-50">
        Click
      </button>
    </>
  )
})

SimulationWindow.displayName = "SimulationWindow"

export default SimulationWindow
