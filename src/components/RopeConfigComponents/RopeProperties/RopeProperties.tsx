import ConfigSection from "../../ConfigSection/ConfigSection"
import PositionControl from "../PositionControl/PositionControl"
import ShapeControl from "../ShapeControl/ShapeControl"

function RopeProperties(): JSX.Element {
  return (
    <ConfigSection title="Properties">
      <PositionControl />
      <ShapeControl />
    </ConfigSection>
  )
}

export default RopeProperties
