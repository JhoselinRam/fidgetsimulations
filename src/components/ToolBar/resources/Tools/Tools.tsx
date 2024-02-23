import { useContext, useRef } from "react"
import CloseToolBar from "../CloseToolBar/CloseToolBar"
import { toolBarContext } from "../../context"
import SimulationParameters from "../../../SimulationParameters/SimulationParameters"
import CollectionPicker from "../../../CollectionPicker/CollectionPicker"
import CollectionList from "../../../CollectionList/CollectionList"

function Tools(): JSX.Element {
  const { isQueryMeet, isCollapsed, addElementInMenu } =
    useContext(toolBarContext)
  const asideElement = useRef<HTMLElement>(null)

  addElementInMenu(asideElement)

  return (
    <aside
      className={`top-0 bottom-0 z-40 w-full max-w-menu bg-tuatara-900 transition-transform overflow-auto ${
        isCollapsed ? "-translate-x-full" : "translate-x-0"
      } ${isQueryMeet ? "static h-full" : "absolute"}`}
      ref={asideElement}
      id="toolBarAside"
    >
      <CloseToolBar />
      <SimulationParameters />
      <CollectionPicker />
      <CollectionList />
    </aside>
  )
}

export default Tools
