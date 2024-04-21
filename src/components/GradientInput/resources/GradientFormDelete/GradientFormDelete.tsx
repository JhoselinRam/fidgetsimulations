import DeleteControl from "../../../DeleteControl/DeleteControl"
import type { GradientFormDeleteProps } from "./GradientFormDelete_types"

function GradientFormDelete({
  onDeleteKnob,
  knobSelected
}: GradientFormDeleteProps): JSX.Element {
  return (
    <div className="bg-tuatara-600 rounded-md size-5 flex justify-center">
      <DeleteControl
        onDelete={() => {
          onDeleteKnob(knobSelected)
        }}
      />
    </div>
  )
}

export default GradientFormDelete
