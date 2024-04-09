import ConfigSection from "../../../../ConfigSection/ConfigSection"
import NumberInput from "../../../../NumberInput/NumberInput"

function MassControl(): JSX.Element {
  return (
    <>
      <ConfigSection.Header>Mass and Charge:</ConfigSection.Header>
      <ConfigSection.Section>
        <NumberInput
          className="gap-5"
          unit="kg"
          minValue={0.001}
          formatOptions={{ maximumFractionDigits: 3 }}
          step={0.01}
        >
          Mass:
        </NumberInput>
        <NumberInput
          unit="C"
          formatOptions={{ maximumFractionDigits: 4 }}
          step={0.0001}
        >
          Charge:
        </NumberInput>
      </ConfigSection.Section>
    </>
  )
}

export default MassControl
