import useBallNumber from "../../../hooks/useBallNumber/useBallNumber"
import ConfigSection from "../../ConfigSection/ConfigSection"
import AddControl from "./resources/AddControl/AddControl"
import BatchConfigControl from "./resources/BatchConfigControl/BatchConfigControl"
import CollisionControl from "./resources/CollisionControl/CollisionControl"
import NumberControl from "./resources/NumberControl/NumberControl"
import VectorEnableControl from "./resources/VectorEnableControl/VectorEnableControl"

function BallNumber(): JSX.Element {
  const { number, addBall, collisionHooks, ...vectorHooks } = useBallNumber()

  return (
    <ConfigSection title="Configuration">
      <BatchConfigControl />
      <AddControl addBall={addBall} />
      <ConfigSection.Section>
        <VectorEnableControl {...vectorHooks} />
        <CollisionControl {...collisionHooks} />
      </ConfigSection.Section>
      <NumberControl number={number} />
    </ConfigSection>
  )
}

export default BallNumber
