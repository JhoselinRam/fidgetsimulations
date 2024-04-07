import ConfigSection from "../../../ConfigSection/ConfigSection"
import NumberInput from "../../../NumberInput/NumberInput"
import type { MagnitudeConfigProps } from "./MagnitudeConfig_types"

function MagnitudeConfig({
  item,
  name,
  unit,
  header
}: MagnitudeConfigProps): JSX.Element {
  return (
    <ConfigSection title="Magnitude">
      <ConfigSection.Header>{header}:</ConfigSection.Header>
      <ConfigSection.Section>
        <NumberInput unit={unit}>{name}:</NumberInput>
      </ConfigSection.Section>
    </ConfigSection>
  )
}

export default MagnitudeConfig
