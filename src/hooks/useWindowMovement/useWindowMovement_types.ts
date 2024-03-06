import type { Dispatch, SetStateAction } from "react"
import type { UseWindowResize } from "./resources/useWindowResize/useWindowResize_types"
import type { UseWindowMove } from "./resources/useWindowMove/useWindowMove_types"
import type {
  GraphicElementPosition,
  GraphicElementSize,
  SizeEdit
} from "../useMainState/resources/GraphicElement/GraphicElement_types"

export interface UseWindowMovement extends UseWindowResize, UseWindowMove {
  movementEnable: boolean
  setMovementEnable: Dispatch<SetStateAction<boolean>>
}

export type MovementCollectionProperties = GraphicElementSize &
  SizeEdit &
  GraphicElementPosition
