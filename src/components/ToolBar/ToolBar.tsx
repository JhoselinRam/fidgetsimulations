import { useMenuToggle } from "../../hooks/useMenuToggle/useMenuToggle"
import CloseToolBar from "./resources/CloseToolBar/CloseToolBar"
import OpenToolBar from "./resources/OpenToolBar/OpenToolBar"
import { toolBarContext } from "./context"

function ToolBar(): JSX.Element {
  const menuState = useMenuToggle(import.meta.env.VITE_TOOL_TOGGLE_QUERY)

  function getAsideElement(e: HTMLElement): void {
    if (e == null) return
    menuState.addElementInMenu(e)
  }

  return (
    <toolBarContext.Provider value={menuState}>
      <aside
        className={`top-0 bottom-0 z-40 w-full max-w-menu bg-tuatara-900 transition-transform ${
          menuState.isCollapsed ? "-translate-x-full" : "translate-x-0"
        } ${menuState.isQueryMeet ? "static h-full" : "absolute"}`}
        ref={getAsideElement}
        id="toolBarAside"
      >
        <CloseToolBar />
      </aside>
      <OpenToolBar />
    </toolBarContext.Provider>
  )
}

export default ToolBar
