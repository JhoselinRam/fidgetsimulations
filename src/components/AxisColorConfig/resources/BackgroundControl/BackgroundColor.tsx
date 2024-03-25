import ConfigSection from "../../../ConfigSection/ConfigSection"
import ColorInput from "../../../ColorInput/ColorInput"
import type { BackgroundColorProps } from "./BackgroundColor_types"

function BackgroundColor({
  onInput,
  value
}: BackgroundColorProps): JSX.Element {
  return (
    <ConfigSection.Header>
      <ColorInput value={value} onChange={onInput}>
        Background:
      </ColorInput>
    </ConfigSection.Header>
  )
}

export default BackgroundColor
