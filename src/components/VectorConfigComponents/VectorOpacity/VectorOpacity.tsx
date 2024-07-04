import useVectorOpacity from "../../../hooks/useVectorOpacity/useVectorOpacity"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import ConfigSection from "../../ConfigSection/ConfigSection"
import RadioInput from "../../RadioInput/RadioInput"
import DynamicControl from "./resources/DynamicControl/DynamicControl"
import StaticControl from "./resources/StaticControl/StaticControl"

function VectorOpacity({ item }: ConfigCollectionProps): JSX.Element {
  const { dynamicOpacityHooks, opacityModeHooks, staticOpacityHooks } =
    useVectorOpacity(item)

  return (
    <ConfigSection title="Opacity">
      <RadioInput {...opacityModeHooks}>
        <StaticControl {...staticOpacityHooks} />
        <DynamicControl type={item.type} {...dynamicOpacityHooks} />
      </RadioInput>
    </ConfigSection>
  )
}

export default VectorOpacity
