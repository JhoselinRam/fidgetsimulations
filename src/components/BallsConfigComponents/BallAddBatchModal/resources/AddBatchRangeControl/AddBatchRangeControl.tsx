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
    <div
      className={`flex flex-col p-1 basis-full gap-2 rounded-md border ${
        isModeSelected
          ? "bg-tuatara-700 border-tuatara-600 shadow-xl"
          : "border-transparent"
      }`}
    >
      <RadioInput.Option value={type}>{`${type[0].toUpperCase()}${type.slice(
        1
      )}`}</RadioInput.Option>
      <div className="flex flex-row gap-2">
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
  )
}

export default AddBatchRangeControl
