import type { UseMenuToggle } from "../useMenuToggle/useMenuToggle_types"

export interface UseToolButton extends UseMenuToggle {
  knobsPosition: KnobPositions
  handleClick: () => void
  handleHoverStart: () => void
  handleHoverEnd: () => void
}

export type KnobPositions = "idle" | "hover" | "activated"
