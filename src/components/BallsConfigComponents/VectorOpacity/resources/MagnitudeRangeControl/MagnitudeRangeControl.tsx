import NumberInput from "../../../../NumberInput/NumberInput"
import type { MagnitudeRangeControlPros } from "./MagnitudeRangeControl_types"

function MagnitudeRangeControl({
  type,
  maxValueHooks,
  minValueHooks
}: MagnitudeRangeControlPros): JSX.Element {
  return (
    <>
      <h3 className={`${maxValueHooks.isDisabled ? "text-tuatara-600" : ""}`}>
        Vector magnitude
      </h3>
      <NumberInput
        minValue={0}
        step={0.01}
        formatOptions={{ maximumFractionDigits: 4 }}
        className="!gap-[0.66rem] ml-3"
        unit={
          type === "velocity" ? (
            "m/s"
          ) : (
            <span>
              m/s<sup>2</sup>
            </span>
          )
        }
        {...minValueHooks}
      >
        Min:
      </NumberInput>
      <NumberInput
        minValue={0}
        step={0.01}
        formatOptions={{ maximumFractionDigits: 4 }}
        className="ml-3"
        unit={
          type === "velocity" ? (
            "m/s"
          ) : (
            <span>
              m/s<sup>2</sup>
            </span>
          )
        }
        {...maxValueHooks}
      >
        Max:
      </NumberInput>
    </>
  )
}

export default MagnitudeRangeControl
