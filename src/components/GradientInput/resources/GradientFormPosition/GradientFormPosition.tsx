import useGradientPosition from "../../../../hooks/useGradientInput/resources/useGradientPosition/useGradientPosition"
import NumberInput from "../../../NumberInput/NumberInput"
import type { GradientFormPositionProps } from "./GradientFormPosition_types"

function GradientFormPosition({
  knobSelected,
  knobs,
  onMoveKnob,
  isDisabled
}: GradientFormPositionProps): JSX.Element {
  const { changePosition, position } = useGradientPosition(
    knobs,
    knobSelected,
    onMoveKnob
  )

  return (
    <NumberInput
      minValue={0}
      maxValue={1}
      formatOptions={{ maximumFractionDigits: 2 }}
      step={0.005}
      onChange={changePosition}
      value={position}
      isDisabled={isDisabled}
    >
      Position
    </NumberInput>
  )
}

export default GradientFormPosition
