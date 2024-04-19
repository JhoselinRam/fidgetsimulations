export interface GradientKnobElementProps {
  position: number
  color: string
  index: number
  placement: "top" | "bottom"
  changeKnobSelected: (index: number) => void
}
