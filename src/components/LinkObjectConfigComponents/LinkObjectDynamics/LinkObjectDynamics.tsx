import ConfigSection from "../../ConfigSection/ConfigSection"
import type { LinkObjectDynamicsProps } from "./LinkObjectDynamics_types"
import PositionControl from "./resources/PositionControl/PositionControl"
import VelocityControl from "./resources/VelocityControl/VelocityControl"

function LinkObjectDynamics({
  positionHooks,
  velocityHooks,
  type
}: LinkObjectDynamicsProps): JSX.Element {
  return (
    <ConfigSection title="Dynamics">
      <PositionControl {...positionHooks} type={type} />
      <VelocityControl {...velocityHooks} />
    </ConfigSection>
  )
}

export default LinkObjectDynamics
