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
    <div className="flex sm:shrink-[1.1] sm:w-auto basis-full">
      <div
        className={`flex flex-col gap-2 rounded-md py-1 px-2 border w-full sm:w-40 min-w-40
    ${
      isModeSelected
        ? "border-transparent bg-tuatara-700 sm:border-tuatara-600 shadow-xl"
        : "border-transparent"
    } `}
      >
        <RadioInput.Option value="fixed">Fixed</RadioInput.Option>
        <NumberInput
          step={step}
          unit={<p className="text-nowrap">{unit}</p>}
          formatOptions={{ maximumFractionDigits: decimals }}
          labelClassName="sm:basis-full"
          groupClassName="sm:basis-full sm:shrink-[0.4]"
          className="pl-4 sm:p-0"
          value={value}
          onChange={changeValue}
          isDisabled={!isModeSelected}
          minValue={minValue}
        >
          {label}:
        </NumberInput>
      </div>
    </div>
  )
}

export default AddBatchFixedControl
