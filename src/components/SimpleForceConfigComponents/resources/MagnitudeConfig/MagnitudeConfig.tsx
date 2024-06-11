import ConfigSection from "../../../ConfigSection/ConfigSection"
import Info from "../../../Info/Info"
import Switch from "../../../Switch/Switch"
import ScientificControl from "../ScientificControl/ScientificControl"
import SimpleMagnitudeControl from "../SimpleMagnitudeControl/SimpleMagnitudeControl"
import type { MagnitudeConfigProps } from "./MagnitudeConfig_types"

function MagnitudeConfig({
  magnitudeName,
  unit,
  magnitudeHeader,
  magnitudeDecimals = 10,
  magnitudeStep,
  infoText,
  scientificHooks,
  scientificMagnitudeHooks,
  scientificPowerHooks,
  simpleMagnitudeHooks,
  children
}: MagnitudeConfigProps): JSX.Element {
  return (
    <ConfigSection title="Magnitude">
      <ConfigSection.Header className="-mb-4">
        <p className="text-nowrap">{magnitudeHeader}:</p>
        {infoText != null && <Info>{infoText}</Info>}
      </ConfigSection.Header>
      <ConfigSection.Section className="pl-2">
        <Switch
          isSelected={scientificHooks.value}
          onChange={scientificHooks.onChange}
        >
          Scientific notation
        </Switch>
      </ConfigSection.Section>
      <ConfigSection.Section>
        {scientificHooks.value ? (
          <ScientificControl
            magnitudeName={magnitudeName}
            scientificMagnitudeHooks={scientificMagnitudeHooks}
            scientificPowerHooks={scientificPowerHooks}
            unit={unit}
          />
        ) : (
          <SimpleMagnitudeControl
            magnitudeName={magnitudeName}
            simpleMagnitudeHooks={simpleMagnitudeHooks}
            unit={unit}
            magnitudeDecimals={magnitudeDecimals}
            magnitudeStep={magnitudeStep}
          />
        )}
      </ConfigSection.Section>
      {children}
    </ConfigSection>
  )
}

export default MagnitudeConfig
