import { useContext } from "react"
import CloseToolBar from "../CloseToolBar/CloseToolBar"
import { toolBarContext } from "../../context"
import SimulationParameters from "../../../SimulationParameters/SimulationParameters"

function Tools(): JSX.Element {
  const { isQueryMeet, isCollapsed, addElementInMenu } =
    useContext(toolBarContext)

  function getAsideElement(e: HTMLElement): void {
    if (e == null) return
    addElementInMenu(e)
  }

  return (
    <aside
      className={`top-0 bottom-0 z-40 w-full max-w-menu bg-tuatara-900 transition-transform ${
        isCollapsed ? "-translate-x-full" : "translate-x-0"
      } ${isQueryMeet ? "static h-full" : "absolute"}`}
      ref={getAsideElement}
      id="toolBarAside"
    >
      <CloseToolBar />
      <SimulationParameters />
    </aside>
  )
}

export default Tools
