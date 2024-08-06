import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Switch from "../../../../Switch/Switch"
import type { HeaderControlProps } from "./HeaderControl_types"

function HeaderControl(hooks: HeaderControlProps): JSX.Element {
  return (
    <ConfigSection.Header>
      <Switch {...hooks} className="flex-row-reverse !text-base">
        Enable:
      </Switch>
    </ConfigSection.Header>
  )
}

export default HeaderControl
