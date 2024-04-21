import ColorInput from "../../../ColorInput/ColorInput"
import type { GradientFormColorProps } from "./GradientFormColor_types"

function GradientFormColor({
  knobSelected,
  knobs,
  onColorKnob
}: GradientFormColorProps): JSX.Element {
  return (
    <ColorInput
      value={knobs[knobSelected].color}
      onChange={(color) => {
        onColorKnob(color, knobSelected)
      }}
      containerClassName="!gap-0"
    />
  )
}

export default GradientFormColor
