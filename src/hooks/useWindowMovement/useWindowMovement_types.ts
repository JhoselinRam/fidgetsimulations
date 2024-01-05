import type { Dispatch, SetStateAction } from "react"
import type { UseWindowResize } from "./resources/useWindowResize/useWindowResize_types"
import type { UseWindowMove } from "./resources/useWindowMove/useWindowMove_types"

export interface UseWindowMovement extends UseWindowResize, UseWindowMove {
  movementEnable: boolean
  setMovementEnable: Dispatch<SetStateAction<boolean>>
}
