import { useMenuToggle } from "../../hooks/useMenuToggle/useMenuToggle"
import CloseToolBar from "./resources/CloseToolBar/CloseToolBar"
import OpenToolBar from "./resources/OpenToolBar/OpenToolBar"
import { toolBarContext } from "./context"

function ToolBar(): JSX.Element {
  const state = useMenuToggle(import.meta.env.VITE_MENU_TOGGLE_QUERY)

  function getAsideElement(e: HTMLElement): void {
    if (e == null) return
    state.addElementInMenu(e)
  }

  return (
    <toolBarContext.Provider value={state}>
      <aside
        className={`absolute top-0 bottom-0 w-full max-w-menu bg-tuatara-900 transition-transform ${
          state.isCollapsed ? "-translate-x-full" : "translate-x-0"
        }`}
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
