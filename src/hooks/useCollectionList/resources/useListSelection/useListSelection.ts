import { useState } from "react"
import type { UseListSelection } from "./useListSelection_types"
import type { Selection } from "react-aria-components"

function useListSelection(): UseListSelection {
  const [selection, setSelection] = useState<Selection>(
    new Set(["simulationWindow"])
  )

  return {
    selection,
    setSelection
  }
}

export default useListSelection
