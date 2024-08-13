import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import NumberInput from "../../../../NumberInput/NumberInput"
import type { VelocityControlProps } from "./VelocityControl_types"

function VelocityControl({
  xHooks,
  yHooks
}: VelocityControlProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header className="mt-5">
        <span>Velocity:</span>
        <Info placement="top" crossOffset={-15}>
          This velocity will be assigned to each ball.
        </Info>
      </ConfigSection.Header>
      <ConfigSection.Section>
        <NumberInput
          unit="m/s"
          step={0.02}
          formatOptions={{ maximumFractionDigits: 8 }}
          {...xHooks}
        >
          x:{" "}
        </NumberInput>
        <NumberInput
          unit="m/s"
          step={0.02}
          formatOptions={{ maximumFractionDigits: 8 }}
          {...yHooks}
        >
          y:{" "}
        </NumberInput>
      </ConfigSection.Section>
    </>
  )
}

export default VelocityControl
