import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Switch from "../../../../Switch/Switch"
import type { LinkEnableControlProps } from "./LinkEnableControl_types"

function LinkEnableControl(hooks: LinkEnableControlProps): JSX.Element {
  return (
    <ConfigSection.Header>
      <Switch {...hooks} className="flex-row-reverse mb-2 !text-base">
        Enable:
      </Switch>
    </ConfigSection.Header>
  )
}

export default LinkEnableControl
