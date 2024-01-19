import type { Dispatch, SetStateAction } from "react"
import type { UseMenuToggle } from "../../hooks/useMenuToggle/useMenuToggle_types"

export interface ToolBarContext extends UseMenuToggle {
  showConfig: boolean
  setShowConfig: Dispatch<SetStateAction<boolean>>
}
