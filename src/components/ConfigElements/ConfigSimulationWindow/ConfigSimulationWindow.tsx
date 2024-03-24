import AxisConfig from "../../AxisConfig/AxisConfig"
import ColorGraphConfig from "../../ColorGraphConfig/ColorGraphConfig"
import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import MoveCollection from "../../MoveCollection/MoveCollection"

function ConfigSimulationWindow({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <MoveCollection item={item} />
      <AxisConfig item={item} />
      <ColorGraphConfig item={item} />
    </ConfigCollection>
  )
}

export default ConfigSimulationWindow
