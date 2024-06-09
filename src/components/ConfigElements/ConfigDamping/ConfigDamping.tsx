import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import SimpleForceConfig from "../../SimpleForceConfigComponents/SimpleForceConfig"

function ConfigDamping({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <SimpleForceConfig
        item={item}
        magnitudeName="c"
        unit="kg/s"
        magnitudeHeader="Damping coefficient"
        magnitudeStep={0.005}
      />
    </ConfigCollection>
  )
}

export default ConfigDamping
