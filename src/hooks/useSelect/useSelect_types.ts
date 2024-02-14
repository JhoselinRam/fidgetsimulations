import type { Dispatch, SetStateAction } from "react"

export interface UseSelect {
  isDrop: boolean
  setIsDrop: Dispatch<SetStateAction<boolean>>
  popoverSize: number
}
