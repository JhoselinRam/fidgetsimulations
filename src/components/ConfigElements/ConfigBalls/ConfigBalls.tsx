import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"

function ConfigBalls({ item }: ConfigCollectionProps): JSX.Element {
  return <ConfigCollection item={item}></ConfigCollection>
}

export default ConfigBalls
