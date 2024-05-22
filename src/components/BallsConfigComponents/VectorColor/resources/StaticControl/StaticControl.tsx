import useVectorStaticControl from "../../../../../hooks/useVectorStaticControl/useVectorStaticControl"
import ColorInput from "../../../../ColorInput/ColorInput"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import RadioInput from "../../../../RadioInput/RadioInput"
import type { StaticControlProps } from "./StaticControl_types"

function StaticControl({ type }: StaticControlProps): JSX.Element {
  const { colorHooks } = useVectorStaticControl(type)
  return (
    <>
      <ConfigSection.Header>
        <RadioInput.Option value="static">Static</RadioInput.Option>
      </ConfigSection.Header>
      <ConfigSection.Section className="!mt-2">
        <ColorInput {...colorHooks} />
      </ConfigSection.Section>
    </>
  )
}

export default StaticControl
