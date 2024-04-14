import NumberInput from "../../../../NumberInput/NumberInput"
import RadioInput from "../../../../RadioInput/RadioInput"
import type { AddBatchFixedControlProps } from "./AddBatchFixedControl_types"

function AddBatchFixedControl({
  decimals,
  step,
  unit,
  label
}: AddBatchFixedControlProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2 border rounded-md border-zinc-500 p-1">
      <RadioInput.Option value="fixed">Fixed</RadioInput.Option>
      <NumberInput
        step={step}
        unit={unit}
        formatOptions={{ maximumFractionDigits: decimals }}
      >
        {label}:
      </NumberInput>
    </div>
  )
}

export default AddBatchFixedControl
