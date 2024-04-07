import type { SimpleForceConfigProps } from "./SimpleForceConfig_types"
import MagnitudeConfig from "./resources/MagnitudeConfig/MagnitudeConfig"

function SimpleForceConfig({
  item,
  unit,
  name,
  header
}: SimpleForceConfigProps): JSX.Element {
  return (
    <>
      <MagnitudeConfig item={item} name={name} unit={unit} header={header} />
    </>
  )
}

export default SimpleForceConfig
