import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import RadioInput from "../../../../RadioInput/RadioInput"
import MagnitudeRangeControl from "../MagnitudeRangeControl/MagnitudeRangeControl"
import OpacityRangeControl from "../OpacityRangeControl/OpacityRangeControl"
import type { DynamicControlProps } from "./DynamicControl_types"

function DynamicControl({
  type,
  magnitudeHooks,
  valueHooks
}: DynamicControlProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header className="mt-3">
        <RadioInput.Option value="dynamic">Dynamic</RadioInput.Option>
        <Info placement="left" crossOffset={50}>
          <p>The opacity of each {type} vector will depend on its magnitude.</p>
          <p className="mt-2">
            Vectors with magnitude equal or less than the Min magnitude will
            share the Min opacity value. Something similar will happen to
            vectors with magnitude equal or grater than the Max magnitude.
          </p>
        </Info>
      </ConfigSection.Header>
      <ConfigSection.Section className="!mt-3">
        <MagnitudeRangeControl type={type} {...magnitudeHooks} />
        <OpacityRangeControl {...valueHooks} />
      </ConfigSection.Section>
    </>
  )
}

export default DynamicControl
