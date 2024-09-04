import ColorInput from "../../../../ColorInput/ColorInput"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import NumberInput from "../../../../NumberInput/NumberInput"
import type { AestheticsControlProps } from "./AestheticsControl_types"

function AestheticsControl({
  colorHooks,
  radiusHooks
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
          {...radiusHooks}
        >
          Radius:
        </NumberInput>
        <ColorInput containerClassName="gap-5" {...colorHooks}>
          Color:
        </ColorInput>
      </ConfigSection.Section>
    </>
  )
}

export default AestheticsControl
