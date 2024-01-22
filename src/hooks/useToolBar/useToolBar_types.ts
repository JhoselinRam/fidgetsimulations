import type { Dispatch, SetStateAction } from "react"
import type { UseMenuToggle } from "../useMenuToggle/useMenuToggle_types"

export interface UseToolBar extends UseMenuToggle {
  showConfig: boolean
  setShowConfig: Dispatch<SetStateAction<boolean>>
}
