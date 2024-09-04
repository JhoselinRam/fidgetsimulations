import ConfigSection from "../../ConfigSection/ConfigSection"
import type { LinkObjectBallPropertiesProps } from "./LinkObjectBallProperties_types"
import AestheticsControl from "./resources/AestheticsControl/AestheticsControl"
import MassControl from "./resources/MassControl/MassControl"

function LinkObjectBallProperties({
  aestheticsHooks,
  massChargeHooks,
  type
}: LinkObjectBallPropertiesProps): JSX.Element {
  return (
    <ConfigSection title="Ball Properties">
      <MassControl {...massChargeHooks} type={type} />
      <AestheticsControl {...aestheticsHooks} />
    </ConfigSection>
  )
}

export default LinkObjectBallProperties
