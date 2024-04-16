import { useState } from "react"
import GradientInput from "../../../../GradientInput/GradientInput"
import RadioInput from "../../../../RadioInput/RadioInput"
import type { AddBatchColorRangeControlProps } from "./AddBatchColorRangeControl_types"
import type { GradientInputKnob } from "../../../../../hooks/useGradientInput/resources/useGradientKnob/useGradientKnob_types"

function AddBatchColorRangeControl({
  type
}: AddBatchColorRangeControlProps): JSX.Element {
  const [value, setValue] = useState<GradientInputKnob[]>([
    // { position: 0, color: "#0000ff" },
    // { position: 0.25, color: "#00ff00" },
    // { position: 1, color: "#ff0000" }
  ])

  return (
    <div className="flex flex-col p-1 basis-full gap-2 bg-tuatara-700 rounded-md border border-tuatara-600">
      <RadioInput.Option value={type}>{`${type[0].toUpperCase()}${type.slice(
        1
      )}`}</RadioInput.Option>
      <GradientInput
        className="self-center"
        value={value}
        onChange={setValue}
      />
    </div>
  )
}

export default AddBatchColorRangeControl
