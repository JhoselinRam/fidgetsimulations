import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import SimpleForceConfig from "../../SimpleForceConfigComponents/SimpleForceConfig"

function ConfigGravity({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <SimpleForceConfig
        item={item}
        magnitudeName="G"
        unit={
          <p>
            Nm<sup>2</sup>/kg<sup>2</sup>
          </p>
        }
        magnitudeHeader="Gravitational constant"
        magnitudeScientificNotation={true}
        magnitudeDecimals={21}
        magnitudeStep={0}
      />
    </ConfigCollection>
  )
}

export default ConfigGravity
