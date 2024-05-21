import ConfigSection from "../../../../ConfigSection/ConfigSection"
import RadioInput from "../../../../RadioInput/RadioInput"
import Select from "../../../../Select/Select"
import ColorRangeControl from "../ColorRangeControl/ColorRangeControl"
import type { DynamicControlProps } from "./DynamicControl_types"

function DynamicControl({ type }: DynamicControlProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header className="mt-3">
        <RadioInput.Option value="dynamic">Dynamic</RadioInput.Option>
      </ConfigSection.Header>
      <ColorRangeControl type={type} />
      <ConfigSection.Section className="!mt-3">
        <Select aria-label="gradient type"></Select>
      </ConfigSection.Section>
    </>
  )
}

export default DynamicControl
