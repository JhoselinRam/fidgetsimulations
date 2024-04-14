import GradientInput from "../../../../GradientInput/GradientInput"
import RadioInput from "../../../../RadioInput/RadioInput"
import type { AddBatchColorRangeControlProps } from "./AddBatchColorRangeControl_types"

function AddBatchColorRangeControl({
  type
}: AddBatchColorRangeControlProps): JSX.Element {
  return (
    <div className="flex flex-col p-1 basis-full gap-2 bg-tuatara-700 rounded-md border border-tuatara-600">
      <RadioInput.Option value={type}>{`${type[0].toUpperCase()}${type.slice(
        1
      )}`}</RadioInput.Option>
      <GradientInput />
    </div>
  )
}

export default AddBatchColorRangeControl
