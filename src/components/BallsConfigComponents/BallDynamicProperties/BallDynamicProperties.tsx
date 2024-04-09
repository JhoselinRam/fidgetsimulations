import ConfigSection from "../../ConfigSection/ConfigSection"
import DynamicsControl from "./resources/DynamicsControl/DynamicsControl"
import SelectionControl from "./resources/SelectionControl/SelectionControl"

function BallDynamicProperties(): JSX.Element {
  return (
    <ConfigSection title="Dynamics">
      <SelectionControl />
      <DynamicsControl />
    </ConfigSection>
  )
}

export default BallDynamicProperties
