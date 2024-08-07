import ConfigSection from "../../../../ConfigSection/ConfigSection"
import RadioInput from "../../../../RadioInput/RadioInput"
import ColorGradientControl from "../ColorGradientControl/ColorGradientControl"
import ColorRangeControl from "../ColorRangeControl/ColorRangeControl"
import type { DynamicControlProps } from "./DynamicControl_types"

function DynamicControl({
  item,
  colorRangeHooks,
  gradientHooks
}: DynamicControlProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header className="mt-3">
        <RadioInput.Option value="dynamic">Dynamic</RadioInput.Option>
      </ConfigSection.Header>
      <ColorRangeControl type={item.type} {...colorRangeHooks} />
      <ColorGradientControl {...gradientHooks} />
    </>
  )
}

export default DynamicControl
