import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import SimpleForceConfig from "../../SimpleForceConfigComponents/SimpleForceConfig"

function ConfigElectric({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <SimpleForceConfig
        item={item}
        magnitudeName="k"
        unit={
          <p>
            Nm<sup>2</sup>/C<sup>2</sup>
          </p>
        }
        magnitudeHeader="Coulomb's constant"
        magnitudeStep={0}
      />
    </ConfigCollection>
  )
}

export default ConfigElectric
