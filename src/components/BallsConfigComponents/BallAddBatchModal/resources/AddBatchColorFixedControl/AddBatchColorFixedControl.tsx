import ColorInput from "../../../../ColorInput/ColorInput"
import RadioInput from "../../../../RadioInput/RadioInput"

function AddBatchColorFixedControl(): JSX.Element {
  return (
    <div
      className="flex flex-col w-40 min-w-40 gap-2 sm:shrink-[1.1] sm:w-auto sm:basis-full rounded-md p-1
bg-tuatara-700 border border-tuatara-600"
    >
      <RadioInput.Option value="fixed">Fixed</RadioInput.Option>
      <ColorInput>Color</ColorInput>
    </div>
  )
}

export default AddBatchColorFixedControl
