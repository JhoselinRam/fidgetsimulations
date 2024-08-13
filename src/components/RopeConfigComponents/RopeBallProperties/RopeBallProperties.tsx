import ConfigSection from "../../ConfigSection/ConfigSection"
import type { RopeBallPropertiesProps } from "./RopeBallProperties_types"
import AestheticsControl from "./resources/AestheticsControl/AestheticsControl"
import MassControl from "./resources/MassControl/MassControl"

function RopeBallProperties({
  aestheticsHooks,
  massChargeHooks
}: RopeBallPropertiesProps): JSX.Element {
  return (
    <ConfigSection title="Ball Properties">
      <MassControl {...massChargeHooks} />
      <AestheticsControl {...aestheticsHooks} />
    </ConfigSection>
  )
}

export default RopeBallProperties
