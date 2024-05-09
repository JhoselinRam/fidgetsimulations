import type { ReactNode } from "react"
import type { SheetSelectionMode } from "../../../../../../../hooks/useConfigBatchSheet/useConfigBatchSheet_types"

export interface BaseCellProps {
  children?: ReactNode
}

export type SelectionStylePicker = {
  [k in SheetSelectionMode]: string
}
