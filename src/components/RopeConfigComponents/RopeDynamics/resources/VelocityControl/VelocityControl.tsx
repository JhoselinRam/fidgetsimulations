import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import NumberInput from "../../../../NumberInput/NumberInput"

function VelocityControl(): JSX.Element {
  return (
    <>
      <ConfigSection.Header className="mt-5">
        <span>Velocity</span>
        <Info placement="top" crossOffset={-15}>
          This velocity will be assigned to each ball.
        </Info>
      </ConfigSection.Header>
      <ConfigSection.Section>
        <NumberInput
          unit="m/s"
          step={0.02}
          formatOptions={{ maximumFractionDigits: 8 }}
        >
          x:{" "}
        </NumberInput>
        <NumberInput
          unit="m/s"
          step={0.02}
          formatOptions={{ maximumFractionDigits: 8 }}
        >
          y:{" "}
        </NumberInput>
      </ConfigSection.Section>
    </>
  )
}

export default VelocityControl
