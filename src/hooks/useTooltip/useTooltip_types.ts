import type { Dispatch, SetStateAction } from "react"

export interface UseTooltip {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  buttonToggle: () => void
}
