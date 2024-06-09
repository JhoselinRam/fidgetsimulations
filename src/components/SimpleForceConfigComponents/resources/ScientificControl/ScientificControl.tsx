import NumberInput from "../../../NumberInput/NumberInput"
import type { ScientificControlProps } from "./ScientificControl_types"

function ScientificControl({
  magnitudeName,
  scientificMagnitudeHooks,
  scientificPowerHooks,
  unit
}: ScientificControlProps): JSX.Element {
  return (
    <div className="flex flex-row">
      <NumberInput
        formatOptions={{ maximumFractionDigits: 8 }}
        minValue={1}
        maxValue={9.99999999}
        inputClassName="w-12"
        step={0.05}
        {...scientificMagnitudeHooks}
      >
        {magnitudeName}:
      </NumberInput>
      <NumberInput
        inputClassName="w-8 -ml-1"
        unit={unit}
        formatOptions={{ maximumFractionDigits: 0 }}
        step={0.05}
        {...scientificPowerHooks}
      >
        x10^
      </NumberInput>
    </div>
  )
}

export default ScientificControl
