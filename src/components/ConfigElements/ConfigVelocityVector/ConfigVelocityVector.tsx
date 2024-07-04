import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import VectorConfig from "../../VectorConfigComponents/VectorConfig"

function ConfigVelocityVector({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <VectorConfig item={item} />
    </ConfigCollection>
  )
}

export default ConfigVelocityVector
