import NumberInput from "../../../../NumberInput/NumberInput"
import RadioInput from "../../../../RadioInput/RadioInput"
import type { AddBatchFixedControlProps } from "./AddBatchFixedControl_types"

function AddBatchFixedControl({
  decimals,
  step,
  unit,
  label,
  changeValue,
  value,
  isModeSelected,
  minValue
}: AddBatchFixedControlProps): JSX.Element {
  return (
    <div
      className={`flex flex-col w-40 min-w-40 gap-2 sm:shrink-[1.1] sm:w-auto sm:basis-full rounded-md p-1 border
    ${
      isModeSelected
        ? "bg-tuatara-700 border-tuatara-600 shadow-xl"
        : "border-transparent"
    } `}
    >
      <RadioInput.Option value="fixed">Fixed</RadioInput.Option>
      <NumberInput
        step={step}
        unit={unit}
        formatOptions={{ maximumFractionDigits: decimals }}
        labelClassName="basis-full"
        groupClassName="basis-full shrink-[0.4]"
        value={value}
        onChange={changeValue}
        isDisabled={!isModeSelected}
        minValue={minValue}
      >
        {label}:
      </NumberInput>
    </div>
  )
}

export default AddBatchFixedControl
