import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import Switch from "../../../../Switch/Switch"
import type { FixedControlProps } from "./FixedControl_types"

function FixedControl(hooks: FixedControlProps): JSX.Element {
  return (
    <ConfigSection.Section className="!flex-row -mb-3">
      <Switch {...hooks}>Fixed</Switch>
      <Info placement="left" crossOffset={20}>
        If set, the ball will stay fixed and will not change its velocity or
        acceleration.
      </Info>
    </ConfigSection.Section>
  )
}

export default FixedControl
