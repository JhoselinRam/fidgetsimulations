import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import NumberInput from "../../../../NumberInput/NumberInput"

function PositionControl(): JSX.Element {
  return (
    <>
      <ConfigSection.Header>
        <span>Position</span>
        <Info placement="top" crossOffset={-30}>
          This position correspond to the start of the rope.
        </Info>
      </ConfigSection.Header>
      <ConfigSection.Section>
        <NumberInput
          step={0.03}
          formatOptions={{ maximumFractionDigits: 8 }}
          unit="m"
        >
          x:
        </NumberInput>
        <NumberInput
          step={0.03}
          formatOptions={{ maximumFractionDigits: 8 }}
          unit="m"
        >
          y:
        </NumberInput>
      </ConfigSection.Section>
    </>
  )
}

export default PositionControl
