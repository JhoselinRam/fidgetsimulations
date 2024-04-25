import GradientInput from "../../../../GradientInput/GradientInput"
import RadioInput from "../../../../RadioInput/RadioInput"
import type { AddBatchColorRangeControlProps } from "./AddBatchColorRangeControl_types"

function AddBatchColorRangeControl({
  type,
  changeKnobs,
  knobs,
  isModeSelected,
  changeSpace,
  space
}: AddBatchColorRangeControlProps): JSX.Element {
  return (
    <div
      className={`flex flex-col px-1 pt-1 pb-3 basis-full gap-2 rounded-md border ${
        isModeSelected
          ? "bg-tuatara-700 border-tuatara-600 shadow-xl"
          : "border-transparent"
      }`}
    >
      <RadioInput.Option value={type}>{`${type[0].toUpperCase()}${type.slice(
        1
      )}`}</RadioInput.Option>
      <GradientInput
        className="self-center"
        value={knobs}
        onChange={changeKnobs}
        isDisabled={!isModeSelected}
        outerSpace={space}
        onOuterSpaceChange={changeSpace}
      />
    </div>
  )
}

export default AddBatchColorRangeControl
