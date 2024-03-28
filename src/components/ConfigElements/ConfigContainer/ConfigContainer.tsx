import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"

function ConfigContainer({ item }: ConfigCollectionProps): JSX.Element {
  return <ConfigCollection item={item}></ConfigCollection>
}

export default ConfigContainer
