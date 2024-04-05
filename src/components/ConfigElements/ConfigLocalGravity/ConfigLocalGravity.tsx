import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import LocalGravityMagnitude from "../../LocalGravityConfigComponents/LocalGravityMagnitude/LocalGravityMagnitude"

function ConfigLocalGravity({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <LocalGravityMagnitude item={item} />
    </ConfigCollection>
  )
}

export default ConfigLocalGravity
