import ConfigSection from "../../../../ConfigSection/ConfigSection"
import RadioInput from "../../../../RadioInput/RadioInput"
import type { ShapeControlProps } from "./ShapeControl_types"

function ShapeControl(hooks: ShapeControlProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header className="-mb-5">Shape:</ConfigSection.Header>
      <ConfigSection.Section>
        <RadioInput optionOrientation="horizontal" {...hooks}>
          <RadioInput.Option value="rectangle">Rectangle</RadioInput.Option>
          <RadioInput.Option value="ellipse">Ellipse</RadioInput.Option>
        </RadioInput>
      </ConfigSection.Section>
    </>
  )
}

export default ShapeControl
