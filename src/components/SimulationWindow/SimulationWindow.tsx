import { useContext, useRef } from "react"
import WindowElement from "../WindowElement/WindowElement"
import { mainAreaContext } from "../MainArea/context"
import type { WindowElementRef } from "../WindowElement/WindowElement_types"
import useSimulationWindow from "../../hooks/useSimulationWindow/useSimulationWindow"

function SimulationWindow(): JSX.Element {
  const mainAreaElement = useContext(mainAreaContext)
  const windowHandlers = useRef<WindowElementRef>(null)
  const graphElement = useRef<HTMLDivElement>(null)
  useSimulationWindow(graphElement)

  return (
    <WindowElement
      mainAreaElement={mainAreaElement}
      ref={windowHandlers}
      id="simulationWindow"
      type="simulationWindow"
    >
      <div ref={graphElement}></div>
    </WindowElement>
  )
}

export default SimulationWindow
