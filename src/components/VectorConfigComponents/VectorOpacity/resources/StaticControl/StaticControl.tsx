import ConfigSection from "../../../../ConfigSection/ConfigSection"
import NumberInput from "../../../../NumberInput/NumberInput"
import RadioInput from "../../../../RadioInput/RadioInput"
import type { StaticControlProps } from "./StaticControl_types"

function StaticControl(opacityHooks: StaticControlProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header>
        <RadioInput.Option value="static">Static</RadioInput.Option>
      </ConfigSection.Header>
      <ConfigSection.Section className="!mt-2">
        <NumberInput
          minValue={0}
          maxValue={1}
          formatOptions={{ maximumFractionDigits: 2 }}
          step={0.008}
          {...opacityHooks}
        >
          Opacity:
        </NumberInput>
      </ConfigSection.Section>
    </>
  )
}

export default StaticControl
