import ConfigSection from "../../ConfigSection/ConfigSection"
import AestheticsControl from "./resources/AestheticsControl/AestheticsControl"
import MassControl from "./resources/MassControl/MassControl"

function BallProperties(): JSX.Element {
  return (
    <ConfigSection title="Properties">
      <MassControl />
      <AestheticsControl />
    </ConfigSection>
  )
}

export default BallProperties
