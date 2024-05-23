import toCapitalize from "../../../auxiliary/toCapitalize"
import useVectorOpacity from "../../../hooks/useVectorOpacity/useVectorOpacity"
import ConfigSection from "../../ConfigSection/ConfigSection"
import RadioInput from "../../RadioInput/RadioInput"
import type { VectorConfigType } from "../BallConfigComponents_types"
import DynamicControl from "./resources/DynamicControl/DynamicControl"
import StaticControl from "./resources/StaticControl/StaticControl"

function VectorOpacity({ type }: VectorConfigType): JSX.Element {
  const { opacityModeHooks, staticOpacityHooks, dynamicOpacityHooks } =
    useVectorOpacity(type)

  return (
    <ConfigSection
      title={`${toCapitalize(type)} Vector Opacity`}
      titleClassName="text-sm"
      dropDefault={false}
    >
      <RadioInput {...opacityModeHooks}>
        <StaticControl {...staticOpacityHooks} />
        <DynamicControl type={type} {...dynamicOpacityHooks} />
      </RadioInput>
    </ConfigSection>
  )
}

export default VectorOpacity
