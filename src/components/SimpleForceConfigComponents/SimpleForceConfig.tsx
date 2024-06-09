import useSimpleForce from "../../hooks/useSimpleForce/useSimpleForce"
import type { SimpleForceConfigProps } from "./SimpleForceConfig_types"
import MagnitudeConfig from "./resources/MagnitudeConfig/MagnitudeConfig"

function SimpleForceConfig({
  item,
  unit,
  magnitudeName,
  magnitudeHeader,
  magnitudeDecimals,
  magnitudeStep,
  infoText
}: SimpleForceConfigProps): JSX.Element {
  const magnitudeHooks = useSimpleForce(item)

  return (
    <>
      <MagnitudeConfig
        {...magnitudeHooks}
        magnitudeName={magnitudeName}
        unit={unit}
        magnitudeHeader={magnitudeHeader}
        magnitudeDecimals={magnitudeDecimals}
        magnitudeStep={magnitudeStep}
        infoText={infoText}
      />
    </>
  )
}

export default SimpleForceConfig
