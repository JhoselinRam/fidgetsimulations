import ConfigSection from "../../ConfigSection/ConfigSection"
import AestheticsControl from "./resources/AestheticsControl/AestheticsControl"
import MassControl from "./resources/MassControl/MassControl"

function RopeBallProperties(): JSX.Element {
  return (
    <ConfigSection title="Ball Properties">
      <MassControl />
      <AestheticsControl />
    </ConfigSection>
  )
}

export default RopeBallProperties
