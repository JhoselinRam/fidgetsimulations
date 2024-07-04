import useBallNumber from "../../../hooks/useBallNumber/useBallNumber"
import ConfigSection from "../../ConfigSection/ConfigSection"
import AddControl from "./resources/AddControl/AddControl"
import BatchConfigControl from "./resources/BatchConfigControl/BatchConfigControl"
import CollisionControl from "./resources/CollisionControl/CollisionControl"
import NumberControl from "./resources/NumberControl/NumberControl"
import TrajectoryControl from "./resources/TrajectoryControl/TrajectoryControl"

function BallNumber(): JSX.Element {
  const { number, addBall, collisionHooks, trajectoryHooks } = useBallNumber()

  return (
    <ConfigSection title="Configuration">
      <BatchConfigControl />
      <AddControl addBall={addBall} />
      <ConfigSection.Section>
        <CollisionControl {...collisionHooks} />
        <TrajectoryControl {...trajectoryHooks} />
      </ConfigSection.Section>
      <NumberControl number={number} />
    </ConfigSection>
  )
}

export default BallNumber
