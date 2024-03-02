import ConfigCollection from "../../../ConfigCollection"
import type { ConfigCollectionProps } from "../../../ConfigCollection_types"

function ConfigSimulationWindow({ item }: ConfigCollectionProps): JSX.Element {
  return <ConfigCollection item={item}></ConfigCollection>
}

export default ConfigSimulationWindow
