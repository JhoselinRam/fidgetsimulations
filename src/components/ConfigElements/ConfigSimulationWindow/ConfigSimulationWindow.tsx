import AxisConfig from "../../AxisConfig/AxisConfig"
import AxisColorConfig from "../../AxisColorConfig/AxisColorConfig"
import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import MoveCollection from "../../MoveCollection/MoveCollection"
import GridConfig from "../../GridConfig/GridConfig"

function ConfigSimulationWindow({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <MoveCollection item={item} />
      <AxisConfig item={item} />
      <AxisColorConfig item={item} />
      <GridConfig item={item} />
    </ConfigCollection>
  )
}

export default ConfigSimulationWindow
