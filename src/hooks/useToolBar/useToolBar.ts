import { type Context, createContext, useState, useRef, useEffect } from "react"
import { useMenuToggle } from "../useMenuToggle/useMenuToggle"
import type { UseToolBar } from "./useToolBar_types"

function useToolBar(): UseToolBar {
  const { addElementInMenu, isCollapsed, isQueryMeet, setIsCollapsed } =
    useMenuToggle(import.meta.env.VITE_TOOL_TOGGLE_QUERY)
  const [showConfig, setShowConfig] = useState(false)
  const intersectObserver = useRef(
    window.matchMedia(import.meta.env.VITE_CONFIG_INTERSECT_QUERY)
  )

  // Sets the intersection observer event listener on first render
  useEffect(() => {
    const observer = intersectObserver.current
    const handleObserverChange = (e: MediaQueryListEvent): void => {
      if (!e.matches) return

      setShowConfig(false)
    }

    observer.addEventListener("change", handleObserverChange)

    // Clean up the listener
    return (): void => {
      observer.removeEventListener("change", handleObserverChange)
    }
  }, [setShowConfig])

  // Makes sure the toolbar and config bar do not overlap
  useEffect(() => {
    if (!intersectObserver.current.matches) return

    if (showConfig) setIsCollapsed(true)
    else setIsCollapsed(false)
  }, [showConfig, setIsCollapsed])

  return {
    showConfig,
    setShowConfig,
    addElementInMenu,
    isCollapsed,
    isQueryMeet,
    setIsCollapsed
  }
}

export default useToolBar

export function createToolBarContext(): Context<UseToolBar> {
  return createContext<UseToolBar>({
    isCollapsed: true,
    isQueryMeet: true,
    showConfig: false,
    addElementInMenu: () => false,
    setIsCollapsed: () => false,
    setShowConfig: () => false
  })
}
