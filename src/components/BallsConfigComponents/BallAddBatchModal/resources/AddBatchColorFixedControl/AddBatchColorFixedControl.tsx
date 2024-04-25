import ColorInput from "../../../../ColorInput/ColorInput"
import RadioInput from "../../../../RadioInput/RadioInput"
import type { AddBatchColorFixedControlProps } from "./AddBatchColorFixedControl_types"

function AddBatchColorFixedControl({
  changeValue,
  value,
  isModeSelected
}: AddBatchColorFixedControlProps): JSX.Element {
  return (
    <div
      className={`flex flex-col w-40 min-w-40 gap-2 sm:shrink-[1.1] sm:w-auto sm:basis-full rounded-md p-1 border
        ${
          isModeSelected
            ? "bg-tuatara-700 border-tuatara-600 shadow-xl"
            : "border-transparent"
        }`}
    >
      <RadioInput.Option value="fixed">Fixed</RadioInput.Option>
      <ColorInput
        value={value}
        onChange={changeValue}
        disabled={!isModeSelected}
      >
        Color
      </ColorInput>
    </div>
  )
}

export default AddBatchColorFixedControl
