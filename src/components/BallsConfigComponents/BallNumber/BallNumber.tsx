import useBallNumber from "../../../hooks/useBallNumber/useBallNumber"
import ConfigSection from "../../ConfigSection/ConfigSection"
import AddControl from "./resources/AddControl/AddControl"
import BatchConfigControl from "./resources/BatchConfigControl/BatchConfigControl"
import CollisionControl from "./resources/CollisionControl/CollisionControl"
import NumberControl from "./resources/NumberControl/NumberControl"

function BallNumber(): JSX.Element {
  const { number, addBall } = useBallNumber()

  return (
    <ConfigSection title="Configuration">
      <BatchConfigControl />
      <AddControl addBall={addBall} />
      <CollisionControl />
      <NumberControl number={number} />
    </ConfigSection>
  )
}

export default BallNumber
