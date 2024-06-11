import ConfigSection from "../../../../../../ConfigSection/ConfigSection"
import FormulaLocalGravity from "../../../../../../Formulas/FormulaLocalGravity/FormulaLocalGravity"
import Info from "../../../../../../Info/Info"

function RectangularHeader(): JSX.Element {
  return (
    <ConfigSection.Header>
      <p>Rectangular:</p>
      <Info>
        <p>Each ball will be subject to a force equal to:</p>
        <FormulaLocalGravity className="!h-6" />
      </Info>
    </ConfigSection.Header>
  )
}

export default RectangularHeader
