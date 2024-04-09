import ConfigSection from "../../ConfigSection/ConfigSection"
import AddControl from "./resources/AddControl/AddControl"
import BatchConfigControl from "./resources/BatchConfigControl/BatchConfigControl"
import NumberControl from "./resources/NumberControl/NumberControl"

function BallNumber(): JSX.Element {
  return (
    <ConfigSection title="Configuration">
      <BatchConfigControl />
      <AddControl />
      <NumberControl number={5} />
    </ConfigSection>
  )
}

export default BallNumber
