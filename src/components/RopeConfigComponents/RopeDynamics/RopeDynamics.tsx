import ConfigSection from "../../ConfigSection/ConfigSection"
import type { RopeDynamicsProps } from "./RopeDynamics_types"
import PositionControl from "./resources/PositionControl/PositionControl"
import VelocityControl from "./resources/VelocityControl/VelocityControl"

function RopeDynamics({
  positionHooks,
  velocityHooks
}: RopeDynamicsProps): JSX.Element {
  return (
    <ConfigSection title="Dynamics">
      <PositionControl {...positionHooks} />
      <VelocityControl {...velocityHooks} />
    </ConfigSection>
  )
}

export default RopeDynamics
