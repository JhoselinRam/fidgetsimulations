import ConfigSection from "../../../../ConfigSection/ConfigSection"
import ColorInput from "../../../../ColorInput/ColorInput"
import NumberInput from "../../../../NumberInput/NumberInput"
import Switch from "../../../../Switch/Switch"
import type { BackgroundControlProps } from "./BackgroundControl_types"

function BackgroundControl({
  changeColor,
  changeEnable,
  changeOpacity,
  color,
  enable,
  opacity
}: BackgroundControlProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header className="mt-4">
        <p>Background:</p>
        <Switch isSelected={enable} onChange={changeEnable} />
      </ConfigSection.Header>
      <ConfigSection.Section>
        <ColorInput
          containerClassName="gap-[1.375rem]"
          value={color}
          onChange={changeColor}
          disabled={!enable}
        >
          Color:
        </ColorInput>
        <NumberInput
          minValue={0}
          maxValue={1}
          formatOptions={{ maximumFractionDigits: 2 }}
          step={0.008}
          value={opacity}
          onChange={changeOpacity}
          isDisabled={!enable}
        >
          Opacity:
        </NumberInput>
      </ConfigSection.Section>
    </>
  )
}

export default BackgroundControl
