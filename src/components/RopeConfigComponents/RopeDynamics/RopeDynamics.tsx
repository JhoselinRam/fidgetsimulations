import ConfigSection from "../../ConfigSection/ConfigSection"
import PositionControl from "./resources/PositionControl/PositionControl"
import VelocityControl from "./resources/VelocityControl/VelocityControl"

function RopeDynamics(): JSX.Element {
  return (
    <ConfigSection title="Dynamics">
      <PositionControl />
      <VelocityControl />
    </ConfigSection>
  )
}

export default RopeDynamics
