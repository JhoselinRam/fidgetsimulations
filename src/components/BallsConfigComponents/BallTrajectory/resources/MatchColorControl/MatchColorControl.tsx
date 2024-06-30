import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Switch from "../../../../Switch/Switch"
import type { MatchColorControlProps } from "./MatchColorControl_types"

function MatchColorControl(matchHooks: MatchColorControlProps): JSX.Element {
  return (
    <ConfigSection.Header>
      <Switch {...matchHooks} className="flex-row-reverse !text-base">
        Match ball color:
      </Switch>
    </ConfigSection.Header>
  )
}

export default MatchColorControl
