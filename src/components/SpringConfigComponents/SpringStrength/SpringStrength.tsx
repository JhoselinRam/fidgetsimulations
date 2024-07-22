import useSpringStrength from "../../../hooks/useSpringStrength/useSpringStrength"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import ConfigSection from "../../ConfigSection/ConfigSection"
import FormulaSpring from "../../Formulas/FormulaSpring/FormulaSpring"
import Info from "../../Info/Info"
import NumberInput from "../../NumberInput/NumberInput"

function SpringStrength({ item }: ConfigCollectionProps): JSX.Element {
  const strengthHooks = useSpringStrength(item)

  return (
    <ConfigSection.Section className="-mb-2 !flex-row">
      <NumberInput unit="N/m" minValue={0} step={0.01} {...strengthHooks}>
        Strength:
      </NumberInput>
      <Info placement="left" crossOffset={60}>
        <p>Each pair of balls will be subject to a force equal to:</p>
        <FormulaSpring className="!h-3 my-2" />
        <p>In the direction of the line going through the balls.</p>
        <p className="mt-2">
          Where <i>x</i> is the displacement of the spring from its rest point,
          and <i>k</i> is the spring constant or spring strength.
        </p>
      </Info>
    </ConfigSection.Section>
  )
}

export default SpringStrength
