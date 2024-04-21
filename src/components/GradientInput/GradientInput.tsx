import { useRef } from "react"
import useGradientInput from "../../hooks/useGradientInput/useGradientInput"
import type { GradientInputProps } from "./GradientInput_types"
import GradientConfig from "./resources/GradientConfig/GradientConfig"
import GradientKnobElement from "./resources/GradientKnobElement/GradientKnobElement"
import GradientStepElement from "./resources/GradientStepElement/GradientStepElement"

function GradientInput({
  className,
  controlClassName,
  resolution = 50,
  placement = "bottom",
  onChange,
  value,
  onOuterSpaceChange,
  outerSpace
}: GradientInputProps): JSX.Element {
  const validResolution = getValidResolution(resolution)
  const mainElement = useRef<HTMLDivElement>(null)
  const {
    knobs,
    steps,
    changeSpace,
    space,
    knobSelected,
    onGradientPointerDown,
    changeKnobSelected,
    onColorKnob,
    onDeleteKnob,
    onMoveKnob
  } = useGradientInput(
    validResolution,
    mainElement,
    value,
    onChange,
    outerSpace,
    onOuterSpaceChange
  )

  return (
    <div
      className={`w-full max-w-48 h-6 border border-tuatara-500 rounded-r-md flex flex-row ${className}`}
    >
      <div
        className={`w-full h-full relative hover:cursor-copy ${controlClassName}`}
        ref={mainElement}
        onPointerDown={onGradientPointerDown}
      >
        {steps.map((step) => (
          <GradientStepElement
            key={step.position}
            step={step}
            resolution={validResolution}
          />
        ))}
        {knobs.map((knob, index) => (
          <GradientKnobElement
            index={index}
            position={knob.position}
            color={knob.color}
            placement={placement}
            key={knob.position}
            changeKnobSelected={changeKnobSelected}
          />
        ))}
      </div>
      <GradientConfig
        changeSpace={changeSpace}
        knobs={knobs}
        space={space}
        knobSelected={knobSelected}
        changeKnobSelected={changeKnobSelected}
        onMoveKnob={onMoveKnob}
        onColorKnob={onColorKnob}
        onDeleteKnob={onDeleteKnob}
      />
    </div>
  )
}

export default GradientInput

function getValidResolution(value: number): number {
  const boundedValue = Math.round(Math.abs(value))
  return boundedValue > 1 ? boundedValue : 2
}
