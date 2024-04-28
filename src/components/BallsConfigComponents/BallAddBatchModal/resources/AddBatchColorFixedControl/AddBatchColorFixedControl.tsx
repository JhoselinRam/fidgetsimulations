import ColorInput from "../../../../ColorInput/ColorInput"
import RadioInput from "../../../../RadioInput/RadioInput"
import type { AddBatchColorFixedControlProps } from "./AddBatchColorFixedControl_types"

function AddBatchColorFixedControl({
  changeValue,
  value,
  isModeSelected
}: AddBatchColorFixedControlProps): JSX.Element {
  return (
    <div className="flex sm:shrink-[1.1] sm:w-auto basis-full">
      <div
        className={`flex flex-col gap-2 rounded-md py-1 px-2 border w-full sm:w-40 min-w-40
        ${
          isModeSelected
            ? "border-transparent bg-tuatara-700 sm:border-tuatara-600 shadow-xl"
            : "border-transparent"
        }`}
      >
        <RadioInput.Option value="fixed">Fixed</RadioInput.Option>
        <ColorInput
          value={value}
          onChange={changeValue}
          disabled={!isModeSelected}
          containerClassName="pl-4 sm:p-0"
        >
          Color
        </ColorInput>
      </div>
    </div>
  )
}

export default AddBatchColorFixedControl
