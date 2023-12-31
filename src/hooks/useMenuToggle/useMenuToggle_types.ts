export interface UseMenuToggle {
  isCollapsed: boolean
  isQueryMeet: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  addElementInMenu: (element: HTMLElement) => void
}
