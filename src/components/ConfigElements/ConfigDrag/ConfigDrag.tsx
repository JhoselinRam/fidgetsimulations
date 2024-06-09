import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import DensityControl from "../../DragConfigComponents/DensityControl/DensityControl"
import SimpleForceConfig from "../../SimpleForceConfigComponents/SimpleForceConfig"

function ConfigDrag({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <SimpleForceConfig
        item={item}
        magnitudeName={
          <span>
            c<sub>d</sub>{" "}
          </span>
        }
        unit=""
        magnitudeHeader="Drag coefficient"
        magnitudeStep={0.005}
      >
        <DensityControl item={item} />
      </SimpleForceConfig>
    </ConfigCollection>
  )
}

export default ConfigDrag
