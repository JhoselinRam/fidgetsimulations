import { type FocusEvent, useState } from "react"
import type { UseValueCell } from "./useValueCell_types"

function useValueCell<T extends number | string>(
  initialValue: T
): UseValueCell<T> {
  const [value, setValue] = useState(initialValue)

  function onFocus(e: FocusEvent): void {
    const input = e.target as HTMLInputElement
    input.select()
  }

  return {
    value,
    changeValue: setValue,
    onFocus
  }
}

export default useValueCell
