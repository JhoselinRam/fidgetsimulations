export interface UseGradientMove {
  onMoveKnob: GradientOnMoveKnob
}

export type GradientOnMoveKnob = (position: number, index: number) => void
