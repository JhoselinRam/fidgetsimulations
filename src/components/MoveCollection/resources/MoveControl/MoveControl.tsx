import ConfigSection from "../../../ConfigSection/ConfigSection"
import NumberInput from "../../../NumberInput/NumberInput"
import type { MoveControlProps } from "./MoveControl_types"

function MoveControl({
  changeX,
  changeY,
  x,
  y
}: MoveControlProps): JSX.Element {
  return (
    <ConfigSection.Section>
      <NumberInput
        unit="px"
        step={1}
        formatOptions={{ maximumFractionDigits: 2 }}
        value={x}
        onChange={changeX}
      >
        x:
      </NumberInput>
      <NumberInput
        unit="px"
        step={1}
        formatOptions={{ maximumFractionDigits: 2 }}
        value={y}
        onChange={changeY}
      >
        y:
      </NumberInput>
    </ConfigSection.Section>
  )
}

export default MoveControl
