import ConfigSection from "../../../../ConfigSection/ConfigSection"
import NumberInput from "../../../../NumberInput/NumberInput"
import type { MassControlProps } from "./MassControl_types"

function MassControl({
  changeCharge,
  changeMass,
  charge,
  isValidSelection,
  mass
}: MassControlProps): JSX.Element {
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
          isDisabled={!isValidSelection}
          value={mass}
          onChange={changeMass}
        >
          Mass:
        </NumberInput>
        <NumberInput
          unit="C"
          formatOptions={{ maximumFractionDigits: 4 }}
          step={0.0001}
          isDisabled={!isValidSelection}
          value={charge}
          onChange={changeCharge}
        >
          Charge:
        </NumberInput>
      </ConfigSection.Section>
    </>
  )
}

export default MassControl
