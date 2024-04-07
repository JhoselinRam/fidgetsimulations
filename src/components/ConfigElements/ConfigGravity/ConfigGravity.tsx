import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import SimpleForceConfig from "../../SimpleForceConfigComponents/SimpleForceConfig"

function ConfigGravity({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <SimpleForceConfig
        item={item}
        name="G"
        unit={
          <p>
            Nm<sup>2</sup>/kg<sup>2</sup>
          </p>
        }
        header="Gravitational constant"
      />
    </ConfigCollection>
  )
}

export default ConfigGravity
