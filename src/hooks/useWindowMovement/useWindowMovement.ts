import { useState, type MutableRefObject } from "react"
import type { UseWindowMovement } from "./useWindowMovement_types"

function useWindowMovement(
  element: MutableRefObject<HTMLDivElement | null>
): UseWindowMovement {
  const [movementEnable, setMovementEnable] = useState(true)

  return {
    movementEnable,
    setMovementEnable
  }
}

export default useWindowMovement
