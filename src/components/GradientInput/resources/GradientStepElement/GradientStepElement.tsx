import type { GradientStepElementProps } from "./GradientStepElement_types"

function GradientStepElement({
  step,
  resolution
}: GradientStepElementProps): JSX.Element {
  return (
    <div
      className="gradient-enable-add h-full absolute top-0"
      style={{
        width: `${(1 / resolution) * 100}%`,
        left: `${step.position * 100}%`,
        backgroundColor: step.color
      }}
    ></div>
  )
}

export default GradientStepElement
