import ConfigSection from "../../ConfigSection/ConfigSection"
import Info from "../../Info/Info"
import NumberInput from "../../NumberInput/NumberInput"

function PositionControl(): JSX.Element {
  return (
    <>
      <ConfigSection.Header>
        <span>Position</span>
        <Info placement="left" crossOffset={15}>
          This position correspond to the start of the rope.
        </Info>
      </ConfigSection.Header>
      <ConfigSection.Section>
        <NumberInput
          step={0.01}
          formatOptions={{ maximumFractionDigits: 4 }}
          unit="m"
        >
          x:
        </NumberInput>
        <NumberInput
          step={0.01}
          formatOptions={{ maximumFractionDigits: 4 }}
          unit="m"
        >
          y:
        </NumberInput>
      </ConfigSection.Section>
    </>
  )
}

export default PositionControl
