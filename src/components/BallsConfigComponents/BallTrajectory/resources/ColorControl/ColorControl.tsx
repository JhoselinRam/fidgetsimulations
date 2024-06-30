import ColorInput from "../../../../ColorInput/ColorInput"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import NumberInput from "../../../../NumberInput/NumberInput"
import Switch from "../../../../Switch/Switch"
import type { ColorControlProps } from "./ColorControl_types"

function ColorControl({
  colorHooks,
  fadeHooks,
  opacityHooks
}: ColorControlProps): JSX.Element {
  return (
    <ConfigSection.Section>
      <ColorInput
        {...colorHooks}
        disabled={colorHooks.isDisabled}
        containerClassName="gap-5"
      >
        Color:
      </ColorInput>
      <NumberInput
        {...opacityHooks}
        minValue={0}
        maxValue={1}
        formatOptions={{ maximumFractionDigits: 2 }}
        step={0.008}
      >
        Opacity:
      </NumberInput>
      <div className="flex flex-row gap-2">
        <Switch {...fadeHooks}>Fade</Switch>
        <Info>The trajectory will fade from the opacity value to cero.</Info>
      </div>
    </ConfigSection.Section>
  )
}

export default ColorControl
