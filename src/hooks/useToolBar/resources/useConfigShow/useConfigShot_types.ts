import type { Dispatch, SetStateAction } from "react"

export interface UseConfigShow {
  showConfig: boolean
  setShowConfig: Dispatch<SetStateAction<boolean>>
}
