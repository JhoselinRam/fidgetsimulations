import ConfigSection from "../../ConfigSection/ConfigSection"
import type { BallConfigWidthValidation } from "../BallConfigComponents_types"
import DeleteBallControl from "./resources/DeleteBallControl/DeleteBallControl"
import DynamicsControl from "./resources/DynamicsControl/DynamicsControl"

function BallDynamicProperties({
  ballId,
  isValidSelection
}: BallConfigWidthValidation): JSX.Element {
  return (
    <ConfigSection title="Dynamics">
      <DeleteBallControl ballId={ballId} isValidSelection={isValidSelection} />
      <DynamicsControl ballId={ballId} isValidSelection={isValidSelection} />
    </ConfigSection>
  )
}

export default BallDynamicProperties
