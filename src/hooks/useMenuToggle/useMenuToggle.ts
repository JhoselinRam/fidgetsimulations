import { createContext, useCallback, useEffect, useRef, useState } from "react"
import type { UseMenuToggle } from "./useMenuToggle_types"

/**
 * Custom hook to handle the link list collapse state
 *
 * @param {string} query - Media Query, e.g. "(min-width: 768px)"
 * @returns {Array} An array with the collapsed state and the dispatch function
 */
export function useMenuToggle(query: string): UseMenuToggle {
  // Navbar state
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isQueryMeet, setIsQueryMeet] = useState(true)
  const mediaQuery = useRef(window.matchMedia(query))

  const handleChange = useCallback(
    (e: MediaQueryListEvent) => {
      setIsQueryMeet(e.matches)
    },
    [setIsQueryMeet]
  )

  useEffect(() => {
    mediaQuery.current.addEventListener("change", handleChange)
  }, [handleChange])

  useEffect(() => {
    setIsCollapsed(!isQueryMeet)
  }, [isQueryMeet])

  useEffect(() => {
    setIsQueryMeet(mediaQuery.current.matches)
  }, [])

  return {
    isCollapsed,
    isQueryMeet,
    setIsCollapsed
  }
}

export const MenuToggleContext = createContext<UseMenuToggle>({
  isCollapsed: true,
  isQueryMeet: true,
  setIsCollapsed: () => false
})
