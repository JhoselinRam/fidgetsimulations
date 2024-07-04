import ColorInput from "../../../../ColorInput/ColorInput"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import RadioInput from "../../../../RadioInput/RadioInput"

function StaticControl(): JSX.Element {
  return (
    <>
      <ConfigSection.Header>
        <RadioInput.Option value="static">Static</RadioInput.Option>
      </ConfigSection.Header>
      <ConfigSection.Section className="!mt-2">
        <ColorInput />
      </ConfigSection.Section>
    </>
  )
}

export default StaticControl
