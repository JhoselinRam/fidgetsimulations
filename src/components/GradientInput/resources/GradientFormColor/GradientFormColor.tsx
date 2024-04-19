import ColorInput from "../../../ColorInput/ColorInput"
import type { GradientFormColorProps } from "./GradientFormColor_types"

function GradientFormColor({
  knobSelected,
  knobs
}: GradientFormColorProps): JSX.Element {
  return (
    <ColorInput value={knobs[knobSelected].color} containerClassName="!gap-0" />
  )
}

export default GradientFormColor
