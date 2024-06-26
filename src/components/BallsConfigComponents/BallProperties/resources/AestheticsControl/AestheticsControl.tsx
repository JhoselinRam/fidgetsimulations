import ColorInput from "../../../../ColorInput/ColorInput"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import NumberInput from "../../../../NumberInput/NumberInput"
import type { AestheticsControlProps } from "./AestheticsControl_types"

function AestheticsControl({
  changeColor,
  changeRadius,
  color,
  isValidSelection,
  radius
}: AestheticsControlProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header className="mt-4">Aesthetics:</ConfigSection.Header>
      <ConfigSection.Section>
        <NumberInput
          minValue={import.meta.env.VITE_BALL_MIN_RADIUS}
          formatOptions={{ maximumFractionDigits: 8 }}
          step={0.01}
          unit="m"
          isDisabled={!isValidSelection}
          value={radius}
          onChange={changeRadius}
        >
          Radius:
        </NumberInput>
        <ColorInput
          containerClassName="gap-5"
          disabled={!isValidSelection}
          value={color}
          onChange={changeColor}
        >
          Color:
        </ColorInput>
      </ConfigSection.Section>
    </>
  )
}

export default AestheticsControl
