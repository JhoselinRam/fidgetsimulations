import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import SimpleForceConfig from "../../SimpleForceConfigComponents/SimpleForceConfig"

function ConfigDrag({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <SimpleForceConfig
        item={item}
        name="c"
        unit="kg/s"
        header="Drag coefficient"
      />
    </ConfigCollection>
  )
}

export default ConfigDrag
