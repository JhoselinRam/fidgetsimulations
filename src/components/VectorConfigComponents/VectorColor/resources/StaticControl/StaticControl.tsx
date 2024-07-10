import ColorInput from "../../../../ColorInput/ColorInput"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import RadioInput from "../../../../RadioInput/RadioInput"
import type { StaticControlProps } from "./StaticControl_types"

function StaticControl(colorHooks: StaticControlProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header>
        <RadioInput.Option value="static">Static</RadioInput.Option>
      </ConfigSection.Header>
      <ConfigSection.Section className="!mt-2">
        <ColorInput {...colorHooks} disabled={colorHooks.isDisabled} />
      </ConfigSection.Section>
    </>
  )
}

export default StaticControl
