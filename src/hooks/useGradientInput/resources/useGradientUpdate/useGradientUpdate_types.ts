export interface UseGradientUpdate {
  onMoveKnob: GradientOnMoveKnob
  onColorKnob: GradientOnColorKnob
}

export type GradientOnMoveKnob = (position: number, index: number) => void
export type GradientOnColorKnob = (color: string, index: number) => void
