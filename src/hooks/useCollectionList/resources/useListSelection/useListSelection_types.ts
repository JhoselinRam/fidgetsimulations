import type { Dispatch, SetStateAction } from "react"
import type { Selection } from "react-aria-components"

export interface UseListSelection {
  selection: Selection
  setSelection: Dispatch<SetStateAction<Selection>>
}
