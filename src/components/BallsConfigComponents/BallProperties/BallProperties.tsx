import useBallProperties from "../../../hooks/useBallProperties/useBallProperties"
import ConfigSection from "../../ConfigSection/ConfigSection"
import type { BallConfigWidthValidation } from "../BallConfigComponents_types"
import AestheticsControl from "./resources/AestheticsControl/AestheticsControl"
import MassControl from "./resources/MassControl/MassControl"

function BallProperties({
  ballId,
  isValidSelection
}: BallConfigWidthValidation): JSX.Element {
  const { aestheticsHooks, massAndChargeHooks } = useBallProperties(ballId)

  return (
    <ConfigSection title="Properties">
      <MassControl
        isValidSelection={isValidSelection}
        {...massAndChargeHooks}
      />
      <AestheticsControl
        isValidSelection={isValidSelection}
        {...aestheticsHooks}
      />
    </ConfigSection>
  )
}

export default BallProperties
