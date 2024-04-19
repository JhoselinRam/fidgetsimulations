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
  changeKnobSelected
}: GradientConfigFormProps): JSX.Element {
  return (
    <div className="p-3 w-full">
      <GradientFormSelect changeSpace={changeSpace} space={space} />
      <div className="p-2 mt-2 border border-tuatara-500 bg-tuatara-700 rounded-md flex flex-col gap-3">
        <div className="flex flex-row justify-between pr-1">
          <GradientSelectKnob
            changeKnobSelected={changeKnobSelected}
            knobSelected={knobSelected}
            knobs={knobs}
          />
          <GradientFormColor knobSelected={knobSelected} knobs={knobs} />
          <GradientFormDelete />
        </div>
        <GradientFormPosition />
      </div>
    </div>
  )
}

export default GradientConfigForm
