import GradientFormColor from "../GradientFormColor/GradientFormColor"
import GradientFormDelete from "../GradientFormDelete/GradientFormDelete"
import GradientFormPosition from "../GradientFormPosition/GradientFormPosition"
import GradientFormSelect from "../GradientFormSelect/GradientFormSelect"
import GradientSelectKnob from "../GradientSelectKnob/GradientSelectKnob"
import type { GradientConfigFormProps } from "./GradientConfigForm_types"

function GradientConfigForm({
  changeSpace,
  knobs,
  space,
  knobSelected,
  changeKnobSelected,
  onMoveKnob,
  onColorKnob,
  onDeleteKnob,
  isDisabled
}: GradientConfigFormProps): JSX.Element {
  return (
    <div className="p-3 w-full">
      <GradientFormSelect changeSpace={changeSpace} space={space} />
      <div className="p-2 mt-2 border border-tuatara-600 bg-tuatara-700 rounded-md flex flex-col gap-3">
        <div className="flex flex-row justify-between pr-1">
          <GradientSelectKnob
            changeKnobSelected={changeKnobSelected}
            knobSelected={knobSelected}
            knobs={knobs}
            isDisabled={isDisabled}
          />
          <GradientFormColor
            knobSelected={knobSelected}
            knobs={knobs}
            onColorKnob={onColorKnob}
            isDisabled={isDisabled}
          />
          <GradientFormDelete
            knobSelected={knobSelected}
            onDeleteKnob={onDeleteKnob}
            isDisabled={isDisabled}
          />
        </div>
        <GradientFormPosition
          knobSelected={knobSelected}
          knobs={knobs}
          onMoveKnob={onMoveKnob}
          isDisabled={isDisabled}
        />
      </div>
    </div>
  )
}

export default GradientConfigForm
