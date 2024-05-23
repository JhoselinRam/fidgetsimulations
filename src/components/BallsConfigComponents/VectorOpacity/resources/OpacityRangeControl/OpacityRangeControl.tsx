import NumberInput from "../../../../NumberInput/NumberInput"
import type { OpacityRangeControlProps } from "./OpacityRangeControl_types"

function OpacityRangeControl({
  maxValueHooks,
  minValueHooks
}: OpacityRangeControlProps): JSX.Element {
  return (
    <>
      <h3 className={`${maxValueHooks.isDisabled ? "text-tuatara-600" : ""}`}>
        Opacity value:
      </h3>
      <NumberInput
        minValue={0}
        maxValue={1}
        formatOptions={{ maximumFractionDigits: 2 }}
        step={0.008}
        className="!gap-[0.66rem] ml-3"
        {...minValueHooks}
      >
        Min:
      </NumberInput>
      <NumberInput
        minValue={0}
        maxValue={1}
        formatOptions={{ maximumFractionDigits: 2 }}
        step={0.008}
        className="ml-3"
        {...maxValueHooks}
      >
        Max:
      </NumberInput>
    </>
  )
}

export default OpacityRangeControl
