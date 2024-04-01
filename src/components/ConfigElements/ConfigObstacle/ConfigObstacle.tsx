import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import ObjectColor from "../../ObjectConfigComponents/ObjectColor/ContainerColor"
import ObjectPosition from "../../ObjectConfigComponents/ObjectPosition/ContainerPosition"
import ObjectShape from "../../ObjectConfigComponents/ObjectShape/ObjectShape"

function ConfigObstacle({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <ObjectPosition item={item} />
      <ObjectShape item={item} />
      <ObjectColor item={item} />
    </ConfigCollection>
  )
}

export default ConfigObstacle
