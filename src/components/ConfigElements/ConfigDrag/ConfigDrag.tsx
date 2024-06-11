import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import DensityControl from "../../DragConfigComponents/DensityControl/DensityControl"
import FormulaDrag from "../../Formulas/FormulaDrag/FormulaDrag"
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
        infoText={
          <>
            <p>Each ball will be subject to a force equal to:</p>
            <FormulaDrag className="!h-6" />
            <p className="mt-2">
              Where A is the ball&apos;s cross-sectional area. In this case, it
              is simply its area.
            </p>
            <p className="mt-2">Only values of c≤0 have physical meaning.</p>
          </>
        }
      >
        <DensityControl item={item} />
      </SimpleForceConfig>
    </ConfigCollection>
  )
}

export default ConfigDrag
