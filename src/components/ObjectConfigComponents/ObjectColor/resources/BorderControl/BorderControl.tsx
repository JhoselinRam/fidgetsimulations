import ColorInput from "../../../../ColorInput/ColorInput"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import NumberInput from "../../../../NumberInput/NumberInput"
import Switch from "../../../../Switch/Switch"
import type { BorderControlProps } from "./BorderControl_types"

function BorderControl({
  changeColor,
  changeEnable,
  changeOpacity,
  changeWidth,
  color,
  enable,
  opacity,
  width
}: BorderControlProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header>
        <p>Border:</p>
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
        <NumberInput
          className="gap-5"
          formatOptions={{ maximumFractionDigits: 0 }}
          minValue={0}
          step={0.03}
          value={width}
          onChange={changeWidth}
          isDisabled={!enable}
        >
          Width:
        </NumberInput>
      </ConfigSection.Section>
    </>
  )
}

export default BorderControl
