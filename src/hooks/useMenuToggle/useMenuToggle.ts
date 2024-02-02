import {
  type RefObject,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react"
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
  elementsInMenu: Array<RefObject<HTMLElement>> = []
): UseMenuToggle {
  // Navbar state
  const [isCollapsed, setIsCollapsed] = useState(true)
  const mediaQuery = useRef(window.matchMedia(query))
  const [isQueryMeet, setIsQueryMeet] = useState(mediaQuery.current.matches)
  const elements = useRef<Array<RefObject<HTMLElement>>>(elementsInMenu)
  const elementCallbacks = useRef<Array<() => void>>([])

  const handleChange = useCallback(
    (e: MediaQueryListEvent) => {
      setIsQueryMeet(e.matches)
    },
    [setIsQueryMeet]
  )

  // Checks if the user clicks outside the menu element
  const windowHandleClick = useCallback(
    (e: PointerEvent): void => {
      if (isQueryMeet || isCollapsed) return
      let toggleMenu = true

      elements.current.forEach((element) => {
        if (element.current == null) return
        const rect = element.current.getClientRects()[0]
        if (e.x >= rect.x && e.x <= rect.x + rect.width) {
          if (e.y >= rect.y && e.y <= rect.y + rect.height) {
            toggleMenu = false
          }
        }
      })

      if (toggleMenu) {
        setIsCollapsed(true)
        elementCallbacks.current.forEach((callback) => {
          callback()
        })
      }
    },
    [setIsCollapsed, isQueryMeet, isCollapsed]
  )

  // Adds the event listener to the Media query list observer
  useEffect(() => {
    mediaQuery.current.addEventListener("change", handleChange)
  }, [handleChange])

  // Collapses or open the menu according to the media query observer
  useEffect(() => {
    setIsCollapsed(!isQueryMeet)
  }, [isQueryMeet])

  // Adds a click event on the window element to detect when the user clicks outside the menu elements
  useEffect(() => {
    window.addEventListener("pointerdown", windowHandleClick)

    return () => {
      window.removeEventListener("pointerdown", windowHandleClick)
    }
  }, [windowHandleClick])

  // Adds the html element in the menu
  function addElementInMenu(element: RefObject<HTMLElement>): void {
    if (
      elements.current.find((menuElement) => {
        if (menuElement.current == null || element.current == null) return false
        return menuElement.current.id === element.current.id
      }) !== undefined
    )
      return

    elements.current.push(element)
  }

  // This callbacks will be called when the user click outside the menu elements
  function addCloseCallback(callback: () => void): void {
    elementCallbacks.current.push(callback)
  }

  return {
    isCollapsed,
    isQueryMeet,
    setIsCollapsed,
    addElementInMenu,
    addCloseCallback
  }
}

export function createMenuToggleContext(): React.Context<UseMenuToggle> {
  return createContext<UseMenuToggle>({
    isCollapsed: true,
    isQueryMeet: true,
    setIsCollapsed: () => false,
    addElementInMenu: () => false,
    addCloseCallback: () => false
  })
}
