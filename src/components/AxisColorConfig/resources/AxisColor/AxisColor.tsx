import ColorInput from "../../../ColorInput/ColorInput"
import ConfigSection from "../../../ConfigSection/ConfigSection"
import NumberInput from "../../../NumberInput/NumberInput"
import type { AxisColorProps } from "./AxisColor_types"

function AxisColor({ axis, hooks }: AxisColorProps): JSX.Element {
  return (
    <ConfigSection.Section>
      <div className="flex flex-row items-center gap-2">
        <i>{axis}:</i>
        <div className="flex flex-col gap-1">
          <ColorInput
            containerClassName="gap-6"
            value={hooks[axis].color}
            onChange={hooks[axis].colorChange}
          >
            Color:{" "}
          </ColorInput>
          <NumberInput
            minValue={0}
            maxValue={1}
            formatOptions={{ maximumFractionDigits: 2 }}
            step={0.008}
            value={hooks[axis].opacity}
            onChange={hooks[axis].changeOpacity}
          >
            Opacity:{" "}
          </NumberInput>
        </div>
      </div>
    </ConfigSection.Section>
  )
}

export default AxisColor
