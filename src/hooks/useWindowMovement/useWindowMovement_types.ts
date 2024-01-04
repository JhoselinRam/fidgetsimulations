import type { Dispatch, SetStateAction } from "react"

export interface UseWindowMovement {
  movementEnable: boolean
  setMovementEnable: Dispatch<SetStateAction<boolean>>
}
