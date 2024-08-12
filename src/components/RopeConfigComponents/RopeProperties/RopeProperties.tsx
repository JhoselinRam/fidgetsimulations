import ConfigSection from "../../ConfigSection/ConfigSection"
import ShapeControl from "./resources/ShapeControl/ShapeControl"

function RopeProperties(): JSX.Element {
  return (
    <ConfigSection title="Properties">
      <ShapeControl />
    </ConfigSection>
  )
}

export default RopeProperties
