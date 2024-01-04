import { memo } from "react"
import WindowElement from "../WindowElement/WindowElement"
import { graph2D } from "scigrapher"

const SimulationWindow = memo((): JSX.Element => {
  function setupGraphWindow(element: HTMLDivElement): void {
    graph2D(element)
  }

  return (
    <WindowElement>
      <div ref={setupGraphWindow}></div>
    </WindowElement>
  )
})

SimulationWindow.displayName = "SimulationWindow"

export default SimulationWindow
