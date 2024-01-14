import { useMenuToggle } from "../../hooks/useMenuToggle/useMenuToggle"
import CloseToolBar from "./resources/CloseToolBar/CloseToolBar"
import OpenToolBar from "./resources/OpenToolBar/OpenToolBar"
import { toolBarContext } from "./context"
import { useContext, useEffect } from "react"
import { mainStateContext } from "../../hooks/useMainState/useMainState"

function ToolBar(): JSX.Element {
  const menuState = useMenuToggle(import.meta.env.VITE_TOOL_TOGGLE_QUERY)
  const { mainState, dispatch } = useContext(mainStateContext)

  function getAsideElement(e: HTMLElement): void {
    if (e == null) return
    menuState.addElementInMenu(e)
  }

  function handleTest(): void {
    dispatch({
      type: "mainArea@positionX",
      payload: {
        positionX: mainState.mainArea.positionX + 2
      }
    })
  }

  useEffect(() => {
    console.log(mainState.mainArea.positionX)
  }, [mainState.mainArea.positionX])

  return (
    <toolBarContext.Provider value={menuState}>
      <aside
        className={`top-0 bottom-0 w-full max-w-menu bg-tuatara-900 transition-transform ${
          menuState.isCollapsed ? "-translate-x-full" : "translate-x-0"
        } ${menuState.isQueryMeet ? "static h-full" : "absolute"}`}
        ref={getAsideElement}
        id="toolBarAside"
      >
        <CloseToolBar />
        <button onClick={handleTest}>Move</button>
      </aside>
      <OpenToolBar />
    </toolBarContext.Provider>
  )
}

export default ToolBar
