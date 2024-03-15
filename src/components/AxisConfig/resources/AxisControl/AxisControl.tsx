import NumberInput from "../../../NumberInput/NumberInput"
import type { AxisControlProps } from "./AxisControl_types"

function AxisControl({ axis }: AxisControlProps): JSX.Element {
  return (
    <div className="text-sm flex flex-row my-1">
      <span>
        {axis}: <span className="text-base">[</span>
      </span>
      <div className="flex flex-row">
        <NumberInput></NumberInput>
        <span className="text-base">,</span>
        <NumberInput></NumberInput>
      </div>
      <span className="text-base">]</span>
    </div>
  )
}

export default AxisControl
