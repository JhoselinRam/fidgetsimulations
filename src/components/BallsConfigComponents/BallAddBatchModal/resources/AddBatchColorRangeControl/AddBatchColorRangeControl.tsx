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
    <div className="flex basis-full sm:justify-center sm:w-full">
      <div
        className={`flex flex-col py-1 px-2 gap-2 rounded-md border w-full pb-4 sm:w-fit min-w-[218px] ${
          isModeSelected
            ? "border-transparent bg-tuatara-700 sm:border-tuatara-600 shadow-xl"
            : "border-transparent"
        }`}
      >
        <RadioInput.Option value={type}>{`${type[0].toUpperCase()}${type.slice(
          1
        )}`}</RadioInput.Option>
        <GradientInput
          className="!max-w-full mx-4 !w-auto sm:!min-w-48 sm:!w-full sm:m-0"
          value={knobs}
          onChange={changeKnobs}
          isDisabled={!isModeSelected}
          outerSpace={space}
          onOuterSpaceChange={changeSpace}
        />
      </div>
    </div>
  )
}

export default AddBatchColorRangeControl
