import useBallTrajectory from "../../../hooks/useBallTrajectory/useBallTrajectory"
import ConfigSection from "../../ConfigSection/ConfigSection"
import type { BallConfigWidthValidation } from "../BallConfigComponents_types"
import ColorControl from "./resources/ColorControl/ColorControl"
import LengthControl from "./resources/LengthControl/LengthControl"
import MatchColorControl from "./resources/MatchColorControl/MatchColorControl"

function BallTrajectory({
  ballId,
  isValidSelection
}: BallConfigWidthValidation): JSX.Element {
  const { matchColorHooks, lengthHooks, aestheticHooks } = useBallTrajectory(
    ballId,
    isValidSelection
  )

  return (
    <ConfigSection title="Trajectory">
      <MatchColorControl {...matchColorHooks} />
      <ColorControl {...aestheticHooks} />
      <LengthControl {...lengthHooks} />
    </ConfigSection>
  )
}

export default BallTrajectory
