import type { RefObject } from "react"

export interface UseMenuToggle {
  isCollapsed: boolean
  isQueryMeet: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  addElementInMenu: (element: RefObject<HTMLElement>) => void
  addCloseCallback: (callback: () => void) => void
}
