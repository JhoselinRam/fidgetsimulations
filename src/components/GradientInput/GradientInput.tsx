import useGradientInput from "../../hooks/useGradientInput/useGradientInput"
import type { GradientInputProps } from "./GradientInput_types"
import GradientConfig from "./resources/GradientConfig/GradientConfig"
import GradientStepElement from "./resources/GradientStepElement/GradientStepElement"

function GradientInput({
  className,
  controlClassName,
  resolution = 200,
  placement = "top",
  onChange,
  value,
  onOuterSpaceChange,
  outerSpace
}: GradientInputProps): JSX.Element {
  const validResolution = getValidResolution(resolution)
  const { knobs, steps, changeSpace, space } = useGradientInput(
    validResolution,
    value,
    onChange,
    outerSpace,
    onOuterSpaceChange
  )

  return (
    <div
      className={`w-full max-w-48 h-6 border border-tuatara-500 rounded-r-md flex flex-row ${className}`}
    >
      <div className={`w-full h-full relative ${controlClassName}`}>
        {steps.map((step) => (
          <GradientStepElement
            key={step.position}
            step={step}
            resolution={validResolution}
          />
        ))}
      </div>
      <GradientConfig changeSpace={changeSpace} knobs={knobs} space={space} />
    </div>
  )
}

export default GradientInput

function getValidResolution(value: number): number {
  const boundedValue = Math.round(Math.abs(value))
  return boundedValue > 1 ? boundedValue : 2
}
