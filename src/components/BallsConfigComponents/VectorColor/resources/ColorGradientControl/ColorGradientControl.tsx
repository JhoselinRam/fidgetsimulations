import useVectorColorGradient from "../../../../../hooks/useVectorColorGradient/useVectorColorGradient"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Select from "../../../../Select/Select"
import CustomGradientControl from "../CustomGradientControl/CustomGradientControl"
import type { ColorGradientControlProps } from "./ColorGradientControl_types"

function ColorGradientControl({
  type
}: ColorGradientControlProps): JSX.Element {
  const { selectItems, selectGradientHooks } = useVectorColorGradient(type)

  return (
    <ConfigSection.Section className="!mt-3 pb-2 gap-4">
      <Select
        aria-label="gradient type"
        matchSize={true}
        items={selectItems}
        {...selectGradientHooks}
      >
        {(items) => <Select.Item>{items.name}</Select.Item>}
      </Select>
      <CustomGradientControl type={type} />
    </ConfigSection.Section>
  )
}

export default ColorGradientControl
