import { createContext, useCallback, useEffect, useRef, useState } from "react"
import type { UseMenuToggle } from "./useMenuToggle_types"

/**
 * Custom hook to handle the link list collapse state
 *
 * @param {string} query - Media Query, e.g. "(min-width: 768px)"
 * @param {string} [elementsInMenu=[]] - Menu will collapse if a click is detected outside this elements
 * @returns {Array} An array with the collapsed state and the dispatch function
 */
export function useMenuToggle(
  query: string,
  elementsInMenu: HTMLElement[] = []
): UseMenuToggle {
  // Navbar state
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isQueryMeet, setIsQueryMeet] = useState(true)
  const mediaQuery = useRef(window.matchMedia(query))
  const elements = useRef<HTMLElement[]>(elementsInMenu)

  const handleChange = useCallback(
    (e: MediaQueryListEvent) => {
      setIsQueryMeet(e.matches)
    },
    [setIsQueryMeet]
  )

  const windowHandleClick = useCallback(
    (e: PointerEvent): void => {
      if (isQueryMeet) return
      if (isCollapsed) return
      let toggleMenu = true

      elements.current.forEach((element) => {
        const rect = element.getClientRects()[0]
        if (e.x >= rect.x && e.x <= rect.x + rect.width) {
          if (e.y >= rect.y && e.y <= rect.y + rect.height) {
            toggleMenu = false
          }
        }
      })

      if (toggleMenu) setIsCollapsed(true)
    },
    [setIsCollapsed, isQueryMeet, isCollapsed]
  )

  useEffect(() => {
    mediaQuery.current.addEventListener("change", handleChange)
  }, [handleChange])

  useEffect(() => {
    setIsCollapsed(!isQueryMeet)
  }, [isQueryMeet])

  useEffect(() => {
    window.addEventListener("pointerdown", windowHandleClick)

    return () => {
      window.removeEventListener("pointerdown", windowHandleClick)
    }
  }, [windowHandleClick])

  useEffect(() => {
    setIsQueryMeet(mediaQuery.current.matches)
  }, [])

  function addElementInMenu(element: HTMLElement): void {
    if (
      elements.current.find((menuElement) => menuElement.id === element.id) !==
      undefined
    )
      return

    elements.current.push(element)
  }

  return {
    isCollapsed,
    isQueryMeet,
    setIsCollapsed,
    addElementInMenu
  }
}

export function createMenuToggleContext(): React.Context<UseMenuToggle> {
  return createContext<UseMenuToggle>({
    isCollapsed: true,
    isQueryMeet: true,
    setIsCollapsed: () => false,
    addElementInMenu: () => false
  })
}
