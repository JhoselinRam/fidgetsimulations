import { type Context, createContext } from "react"
import { useMenuToggle } from "../useMenuToggle/useMenuToggle"
import type { UseToolBar } from "./useToolBar_types"
import useConfigShow from "./resources/useConfigShow/useConfigShow"
import useConfigContent from "./resources/useConfigContent/useConfigContent"

function useToolBar(): UseToolBar {
  const {
    addElementInMenu,
    isCollapsed,
    isQueryMeet,
    setIsCollapsed,
    addCloseCallback
  } = useMenuToggle(import.meta.env.VITE_TOOL_TOGGLE_QUERY)
  const { setShowConfig, showConfig } = useConfigShow(
    setIsCollapsed,
    addCloseCallback
  )
  const { setTargetCollection, targetCollection } =
    useConfigContent(setShowConfig)

  return {
    showConfig,
    setShowConfig,
    addElementInMenu,
    isCollapsed,
    isQueryMeet,
    setIsCollapsed,
    addCloseCallback,
    setTargetCollection,
    targetCollection
  }
}

export default useToolBar

export function createToolBarContext(): Context<UseToolBar> {
  return createContext<UseToolBar>({
    isCollapsed: true,
    isQueryMeet: true,
    showConfig: false,
    targetCollection: null,
    addElementInMenu: () => false,
    addCloseCallback: () => false,
    setIsCollapsed: () => false,
    setShowConfig: () => false,
    setTargetCollection: () => false
  })
}
