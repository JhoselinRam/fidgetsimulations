import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import NumberInput from "../../../../NumberInput/NumberInput"
import type { LengthControlProps } from "./LengthControl_types"

function LengthControl(lengthHooks: LengthControlProps): JSX.Element {
  return (
    <ConfigSection.Section className="!flex-row">
      <NumberInput
        {...lengthHooks}
        minValue={0}
        formatOptions={{ maximumFractionDigits: 0 }}
        step={0.2}
      >
        Buffer length:
      </NumberInput>
      <Info placement="left" crossOffset={55}>
        <p>The length of the buffer used to store the ball positions.</p>
        <p className="mt-2">
          The path length will increase with this value, but more memory will be
          used.
        </p>
        <p className="mt-2">
          Higher values of the buffer length might impact performance.
        </p>
      </Info>
    </ConfigSection.Section>
  )
}

export default LengthControl
