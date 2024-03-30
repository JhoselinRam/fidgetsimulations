import useMoveConfig from "../../hooks/useMoveConfig/useMoveConfig"
import ConfigSection from "../ConfigSection/ConfigSection"
import NumberInput from "../NumberInput/NumberInput"
import type { MoveConfigProps } from "./MoveConfig_types"

function MoveConfig({
  step,
  unit,
  actionX,
  actionY,
  valueX,
  valueY,
  item
}: MoveConfigProps): JSX.Element {
  const { changeX, changeY, x, y } = useMoveConfig(
    item,
    valueX,
    valueY,
    actionX,
    actionY
  )

  return (
    <ConfigSection.Section>
      <NumberInput
        unit={unit}
        step={step}
        formatOptions={{ maximumFractionDigits: 2 }}
        value={x}
        onChange={changeX}
      >
        x:
      </NumberInput>
      <NumberInput
        unit={unit}
        step={step}
        formatOptions={{ maximumFractionDigits: 2 }}
        value={y}
        onChange={changeY}
      >
        y:
      </NumberInput>
    </ConfigSection.Section>
  )
}

export default MoveConfig
