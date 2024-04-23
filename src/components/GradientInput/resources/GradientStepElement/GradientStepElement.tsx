import type { GradientStepElementProps } from "./GradientStepElement_types"

function GradientStepElement({
  step,
  isDisabled
}: GradientStepElementProps): JSX.Element {
  return (
    <div
      className={`gradient-enable-add h-full w-full ${
        isDisabled ? "opacity-30" : ""
      }`}
      style={{
        backgroundColor: step.color
      }}
    ></div>
  )
}

export default GradientStepElement
