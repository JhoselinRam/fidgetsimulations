import useSimpleForce from "../../hooks/useSimpleForce/UseSimpleForce"
import type { SimpleForceConfigProps } from "./SimpleForceConfig_types"
import MagnitudeConfig from "./resources/MagnitudeConfig/MagnitudeConfig"

function SimpleForceConfig({
  item,
  unit,
  magnitudeName,
  magnitudeHeader,
  magnitudeDecimals,
  magnitudeStep,
  magnitudeScientificNotation
}: SimpleForceConfigProps): JSX.Element {
  const { magnitudeHooks } = useSimpleForce(item)

  return (
    <>
      <MagnitudeConfig
        hooks={magnitudeHooks}
        magnitudeName={magnitudeName}
        unit={unit}
        magnitudeHeader={magnitudeHeader}
        magnitudeDecimals={magnitudeDecimals}
        magnitudeStep={magnitudeStep}
        magnitudeScientificNotation={magnitudeScientificNotation}
      />
    </>
  )
}

export default SimpleForceConfig
