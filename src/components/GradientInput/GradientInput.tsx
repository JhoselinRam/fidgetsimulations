import { useRef } from "react"
import useGradientInput from "../../hooks/useGradientInput/useGradientInput"
import type { GradientInputProps } from "./GradientInput_types"
import GradientConfig from "./resources/GradientConfig/GradientConfig"
import GradientKnobElement from "./resources/GradientKnobElement/GradientKnobElement"
import GradientStepElement from "./resources/GradientStepElement/GradientStepElement"

function GradientInput({
  className,
  controlClassName,
  resolution = 75,
  placement = "bottom",
  onChange,
  value,
  onOuterSpaceChange,
  outerSpace,
  isDisabled
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
    onOuterSpaceChange,
    isDisabled
  )

  return (
    <div
      className={`w-full max-w-48 h-6 border rounded-r-md flex flex-row ${
        isDisabled != null && isDisabled
          ? "border-zinc-600"
          : "border-tuatara-500"
      } ${className}`}
    >
      <div
        className={`w-full h-full flex flex-row relative p-0 m-0 ${
          isDisabled != null && isDisabled
            ? "hover:cursor-auto"
            : "hover:cursor-copy"
        } ${controlClassName}`}
        style={{
          backgroundColor:
            isDisabled != null && isDisabled
              ? "black"
              : knobs[knobs.length - 1].color
        }}
        ref={mainElement}
        onPointerDown={onGradientPointerDown}
      >
        {steps.map((step) => (
          <GradientStepElement
            key={step.position}
            step={step}
            isDisabled={isDisabled ?? false}
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
            isDisabled={isDisabled ?? false}
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
        isDisabled={isDisabled ?? false}
      />
    </div>
  )
}

export default GradientInput

function getValidResolution(value: number): number {
  const boundedValue = Math.round(Math.abs(value))
  return boundedValue > 1 ? boundedValue : 2
}
