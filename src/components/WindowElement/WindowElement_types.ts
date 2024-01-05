import type { Dispatch, ReactNode, RefObject, SetStateAction } from "react"
import type {
  WindowMoveHandler,
  WindowMoveProps,
  WindowResizeHandler,
  WindowResizeProps
} from "../../hooks/useWindowMovement/useWindowMovement_types"

export interface WindowElementProps {
  children: ReactNode
  mainAreaElement: RefObject<HTMLDivElement>
}

export type ResizeKnobPosition =
  | "top-left"
  | "top"
  | "top-right"
  | "left"
  | "right"
  | "bottom-left"
  | "bottom"
  | "bottom-right"

export type ResizeKnobClass = {
  [k in ResizeKnobPosition]: string
}

export interface WindowElementRef {
  onWindowMove: (handler: WindowMoveHandler) => void
  onWindowResize: (handler: WindowResizeHandler) => void
  windowMove: (newPosition: WindowMoveProps) => void
  windowResize: (newSize: WindowResizeProps) => void
  setMovementEnable: Dispatch<SetStateAction<boolean>>
}
