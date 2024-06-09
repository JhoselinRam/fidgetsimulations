import NumberInput from "../../../NumberInput/NumberInput"
import type { SimpleMagnitudeControlProps } from "./SimpleMagnitudeControl_types"

function SimpleMagnitudeControl({
  magnitudeName,
  simpleMagnitudeHooks,
  unit,
  magnitudeDecimals,
  magnitudeStep
}: SimpleMagnitudeControlProps): JSX.Element {
  return (
    <NumberInput
      unit={unit}
      formatOptions={{
        maximumFractionDigits: magnitudeDecimals
      }}
      step={magnitudeStep}
      {...simpleMagnitudeHooks}
    >
      {magnitudeName}:
    </NumberInput>
  )
}

export default SimpleMagnitudeControl
