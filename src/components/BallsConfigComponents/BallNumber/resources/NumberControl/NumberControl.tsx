import ConfigSection from "../../../../ConfigSection/ConfigSection"
import type { NumberControlProps } from "./NumberControl_types"
import NumberInput from "../../../../NumberInput/NumberInput"

function NumberControl({ number }: NumberControlProps): JSX.Element {
  return (
    <ConfigSection.Section>
      <p>Balls in the simulation:</p>
      <NumberInput value={number} inputClassName="-ml-2" isReadOnly={true} />
    </ConfigSection.Section>
  )
}

export default NumberControl
