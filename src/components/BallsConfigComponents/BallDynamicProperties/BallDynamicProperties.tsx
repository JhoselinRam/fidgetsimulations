import useBallDynamics from "../../../hooks/useBallDynamics/useBallDynamics"
import ConfigSection from "../../ConfigSection/ConfigSection"
import DynamicsControl from "./resources/DynamicsControl/DynamicsControl"
import SelectionControl from "./resources/SelectionControl/SelectionControl"

function BallDynamicProperties(): JSX.Element {
  const { ballId, changeId, items, renameHooks } = useBallDynamics()

  return (
    <ConfigSection title="Dynamics">
      <SelectionControl
        ballId={ballId}
        changeId={changeId}
        items={items}
        renameHooks={renameHooks}
      />
      <DynamicsControl />
    </ConfigSection>
  )
}

export default BallDynamicProperties
