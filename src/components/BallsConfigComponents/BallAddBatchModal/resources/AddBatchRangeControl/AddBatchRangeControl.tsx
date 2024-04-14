import NumberInput from "../../../../NumberInput/NumberInput"
import RadioInput from "../../../../RadioInput/RadioInput"
import type { AddBatchRangeControlProps } from "./AddBatchRangeControl_types"

function AddBatchRangeControl({
  type,
  decimals,
  step
}: AddBatchRangeControlProps): JSX.Element {
  return (
    <div className="flex flex-col p-1 basis-full gap-2 bg-tuatara-700 rounded-md border border-tuatara-600">
      <RadioInput.Option value={type}>{`${type[0].toUpperCase()}${type.slice(
        1
      )}`}</RadioInput.Option>
      <div className="flex flex-row gap-2">
        <NumberInput
          step={step}
          formatOptions={{ maximumFractionDigits: decimals }}
        >
          From:
        </NumberInput>
        <NumberInput
          step={step}
          formatOptions={{ maximumFractionDigits: decimals }}
        >
          To:
        </NumberInput>
      </div>
    </div>
  )
}

export default AddBatchRangeControl
