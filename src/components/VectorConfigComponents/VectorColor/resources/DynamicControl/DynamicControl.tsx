import type { ConfigCollectionProps } from "../../../../ConfigCollection/ConfigCollection_types"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import RadioInput from "../../../../RadioInput/RadioInput"
import ColorRangeControl from "../ColorRangeControl/ColorRangeControl"

function DynamicControl({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header className="mt-3">
        <RadioInput.Option value="dynamic">Dynamic</RadioInput.Option>
      </ConfigSection.Header>
      <ColorRangeControl type={item.type} />
    </>
  )
}

export default DynamicControl
