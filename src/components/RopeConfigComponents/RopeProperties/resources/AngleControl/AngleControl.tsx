import AngleInput from "../../../../AngleInput/AngleInput"
import NumberInput from "../../../../NumberInput/NumberInput"
import type { AngleControlProps } from "./AngleControl_types"

function AngleControl({ angleHooks }: AngleControlProps): JSX.Element {
  return (
    <div className="flex flex-row gap-2">
      <NumberInput
        className="gap-4"
        unit="deg"
        formatOptions={{ maximumFractionDigits: 2 }}
        {...angleHooks}
      >
        Angle:
      </NumberInput>
      <AngleInput {...angleHooks} />
    </div>
  )
}

export default AngleControl
