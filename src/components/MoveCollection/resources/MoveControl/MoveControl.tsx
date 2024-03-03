import NumberInput from "../../../NumberInput/NumberInput"
import type { MoveControlProps } from "./MoveControl_types"

function MoveControl({
  changeX,
  changeY,
  x,
  y
}: MoveControlProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2 mt-2">
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
    </div>
  )
}

export default MoveControl
