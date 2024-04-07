import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import SimpleForceConfig from "../../SimpleForceConfigComponents/SimpleForceConfig"

function ConfigElectric({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <SimpleForceConfig
        item={item}
        name="k"
        unit={
          <p>
            Nm<sup>2</sup>/C<sup>2</sup>
          </p>
        }
        header="Coulomb's constant"
      />
    </ConfigCollection>
  )
}

export default ConfigElectric
