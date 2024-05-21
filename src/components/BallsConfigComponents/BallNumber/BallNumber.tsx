import useBallNumber from "../../../hooks/useBallNumber/useBallNumber"
import ConfigSection from "../../ConfigSection/ConfigSection"
import AddControl from "./resources/AddControl/AddControl"
import BatchConfigControl from "./resources/BatchConfigControl/BatchConfigControl"
import CollisionControl from "./resources/CollisionControl/CollisionControl"
import NumberControl from "./resources/NumberControl/NumberControl"
import VectorControl from "./resources/VectorControl/VectorControl"

function BallNumber(): JSX.Element {
  const {
    number,
    addBall,
    collisionHooks,
    accelerationVectorHooks,
    velocityVectorHooks
  } = useBallNumber()

  return (
    <ConfigSection title="Configuration">
      <BatchConfigControl />
      <AddControl addBall={addBall} />
      <ConfigSection.Section>
        <CollisionControl {...collisionHooks} />
        <VectorControl type="velocity" {...velocityVectorHooks} />
        <VectorControl type="acceleration" {...accelerationVectorHooks} />
      </ConfigSection.Section>
      <NumberControl number={number} />
    </ConfigSection>
  )
}

export default BallNumber
