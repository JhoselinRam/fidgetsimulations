import useVectorColor from "../../../hooks/useVectorColor/useVectorColor"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import ConfigSection from "../../ConfigSection/ConfigSection"
import RadioInput from "../../RadioInput/RadioInput"
import DynamicControl from "./resources/DynamicControl/DynamicControl"
import StaticControl from "./resources/StaticControl/StaticControl"

function VectorColor({ item }: ConfigCollectionProps): JSX.Element {
  const { colorModeHooks, colorHooks, dynamicHooks } = useVectorColor(item)

  return (
    <ConfigSection title="color">
      <RadioInput {...colorModeHooks}>
        <StaticControl {...colorHooks} />
        <DynamicControl item={item} {...dynamicHooks} />
      </RadioInput>
    </ConfigSection>
  )
}

export default VectorColor
