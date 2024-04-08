import { useState } from "react"
import ConfigSection from "../../../ConfigSection/ConfigSection"
import NumberInput from "../../../NumberInput/NumberInput"
import Switch from "../../../Switch/Switch"
import type { MagnitudeConfigProps } from "./MagnitudeConfig_types"

function MagnitudeConfig({
  hooks,
  magnitudeName,
  unit,
  magnitudeHeader,
  magnitudeDecimals = 2,
  magnitudeStep,
  magnitudeScientificNotation = false
}: MagnitudeConfigProps): JSX.Element {
  const [isScientific, setIsScientific] = useState(magnitudeScientificNotation)

  return (
    <ConfigSection title="Magnitude">
      <ConfigSection.Header className="-mb-4">
        {magnitudeHeader}:
      </ConfigSection.Header>
      <ConfigSection.Section className="pl-2">
        <Switch isSelected={isScientific} onChange={setIsScientific}>
          Scientific notation
        </Switch>
      </ConfigSection.Section>
      <ConfigSection.Section>
        <NumberInput
          unit={unit}
          formatOptions={{
            notation: isScientific ? "engineering" : undefined,
            maximumFractionDigits: magnitudeDecimals
          }}
          step={magnitudeStep}
          {...hooks}
        >
          {magnitudeName}:
        </NumberInput>
      </ConfigSection.Section>
    </ConfigSection>
  )
}

export default MagnitudeConfig
