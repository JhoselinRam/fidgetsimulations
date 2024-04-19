import type { PointerEvent } from "react"

export interface UseGradientPointer extends ChangeKnobSelectedHooks {
  onGradientPointerDown: (e: PointerEvent) => void
}

export interface ChangeKnobSelectedHooks {
  knobSelected: number
  changeKnobSelected: (index: number) => void
}
