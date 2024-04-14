import NumberInput from "../../../../NumberInput/NumberInput"
import RadioInput from "../../../../RadioInput/RadioInput"
import type { AddBatchRangeControlProps } from "./AddBatchRangeControl_types"

function AddBatchRangeControl({
  type,
  test,
  ...numberInputProps
}: AddBatchRangeControlProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <RadioInput.Option value={type}>{`${type[0].toUpperCase()}${type.slice(
        1
      )}`}</RadioInput.Option>
      <div className="flex flex-row gap-2">
        <NumberInput {...numberInputProps}>From:</NumberInput>
        <NumberInput {...numberInputProps}>To:</NumberInput>
      </div>
    </div>
  )
}

export default AddBatchRangeControl
