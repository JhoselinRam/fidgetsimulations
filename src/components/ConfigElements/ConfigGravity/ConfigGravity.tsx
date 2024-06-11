import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import FormulaGravity from "../../Formulas/FormulaGravity/FormulaGravity"
import SimpleForceConfig from "../../SimpleForceConfigComponents/SimpleForceConfig"

function ConfigGravity({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <SimpleForceConfig
        item={item}
        magnitudeName="G"
        unit={
          <p className="text-nowrap">
            Nm<sup>2</sup>/kg<sup>2</sup>
          </p>
        }
        magnitudeHeader="Gravitational constant"
        magnitudeDecimals={21}
        magnitudeStep={0}
        infoText={
          <>
            <p>Each ball will be subject to a force equal to:</p>
            <FormulaGravity className="!h-16" />
          </>
        }
      />
    </ConfigCollection>
  )
}

export default ConfigGravity
