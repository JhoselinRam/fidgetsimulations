import { createContext } from "react"
import type { ToolBarContext } from "./ToolBar_types"

export const toolBarContext = createContext<ToolBarContext>({
  isCollapsed: true,
  isQueryMeet: true,
  showConfig: false,
  addElementInMenu: () => false,
  setIsCollapsed: () => false,
  setShowConfig: () => false
})
