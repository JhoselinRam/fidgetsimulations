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
    <div
      className="flex flex-col w-40 min-w-40 gap-2 sm:shrink-[1.1] sm:w-auto sm:basis-full rounded-md p-1
    bg-tuatara-700 border border-tuatara-600"
    >
      <RadioInput.Option value="fixed">Fixed</RadioInput.Option>
      <NumberInput
        step={step}
        unit={unit}
        formatOptions={{ maximumFractionDigits: decimals }}
        labelClassName="basis-full"
        groupClassName="basis-full shrink-[0.4]"
      >
        {label}:
      </NumberInput>
    </div>
  )
}

export default AddBatchFixedControl
