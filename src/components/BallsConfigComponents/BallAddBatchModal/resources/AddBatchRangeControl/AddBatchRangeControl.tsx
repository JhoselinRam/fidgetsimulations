import NumberInput from "../../../../NumberInput/NumberInput"
import RadioInput from "../../../../RadioInput/RadioInput"
import type { AddBatchRangeControlProps } from "./AddBatchRangeControl_types"

function AddBatchRangeControl({
  type,
  decimals,
  step,
  changeFrom,
  changeTo,
  from,
  to,
  isModeSelected,
  minValue
}: AddBatchRangeControlProps): JSX.Element {
  return (
    <div className="flex basis-full sm:justify-center sm:w-full">
      <div
        className={`flex flex-col py-1 px-2 gap-2 rounded-md border w-full sm:w-fit ${
          isModeSelected
            ? "border-transparent bg-tuatara-700 sm:border-tuatara-600 shadow-xl"
            : "border-transparent"
        }`}
      >
        <RadioInput.Option value={type}>{`${type[0].toUpperCase()}${type.slice(
          1
        )}`}</RadioInput.Option>
        <div className="flex flex-row gap-2 pl-4 sm:p-0">
          <NumberInput
            step={step}
            formatOptions={{ maximumFractionDigits: decimals }}
            value={from}
            onChange={changeFrom}
            isDisabled={!isModeSelected}
            minValue={minValue}
          >
            From:
          </NumberInput>
          <NumberInput
            step={step}
            formatOptions={{ maximumFractionDigits: decimals }}
            value={to}
            onChange={changeTo}
            isDisabled={!isModeSelected}
            minValue={minValue}
          >
            To:
          </NumberInput>
        </div>
      </div>
    </div>
  )
}

export default AddBatchRangeControl
