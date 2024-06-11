import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import FormulaElectric from "../../Formulas/FormulaElectric/FormulaElectric"
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
        infoText={
          <>
            <p>Each ball will be subject to a force equal to:</p>
            <FormulaElectric className="!h-16" />
          </>
        }
      />
    </ConfigCollection>
  )
}

export default ConfigElectric
