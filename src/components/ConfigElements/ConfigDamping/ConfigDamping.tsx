import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import FormulaDamping from "../../Formulas/FormulaDamping/FormulaDamping"
import SimpleForceConfig from "../../SimpleForceConfigComponents/SimpleForceConfig"

function ConfigDamping({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <SimpleForceConfig
        item={item}
        magnitudeName="c"
        unit="kg/s"
        magnitudeHeader="Damping coefficient"
        magnitudeStep={0.005}
        infoText={
          <>
            <p>Each ball will be subject to a simple damping force equal to:</p>
            <FormulaDamping className="!h-6" />
            <p className="mt-2">Only values of c≤0 have physical meaning.</p>
          </>
        }
      />
    </ConfigCollection>
  )
}

export default ConfigDamping
