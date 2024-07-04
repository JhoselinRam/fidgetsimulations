import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import ConfigSection from "../../ConfigSection/ConfigSection"
import RadioInput from "../../RadioInput/RadioInput"
import DynamicControl from "./resources/DynamicControl/DynamicControl"
import StaticControl from "./resources/StaticControl/StaticControl"

function VectorColor({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigSection title="color">
      <RadioInput>
        <StaticControl />
        <DynamicControl item={item} />
      </RadioInput>
    </ConfigSection>
  )
}

export default VectorColor
