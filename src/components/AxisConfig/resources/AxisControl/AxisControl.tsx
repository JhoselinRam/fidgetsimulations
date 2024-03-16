import NumberInput from "../../../NumberInput/NumberInput"
import type { AxisControlProps } from "./AxisControl_types"

function AxisControl({ axis }: AxisControlProps): JSX.Element {
  return (
    <div className="mt-2">
      {axis}:
      <div className="pl-2 flex flex-col gap-2">
        <NumberInput>From : </NumberInput>
        <NumberInput className="ml-5">To:</NumberInput>
      </div>
    </div>
  )
}

export default AxisControl
