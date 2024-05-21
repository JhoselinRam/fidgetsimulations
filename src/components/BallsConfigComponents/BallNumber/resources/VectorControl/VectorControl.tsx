import toCapitalize from "../../../../../auxiliary/toCapitalize"
import Info from "../../../../Info/Info"
import Switch from "../../../../Switch/Switch"
import type { VectorControlProps } from "./VectorControl_types"

function VectorControl({
  isSelected,
  onChange,
  type
}: VectorControlProps): JSX.Element {
  return (
    <Switch isSelected={isSelected} onChange={onChange}>
      {toCapitalize(type)}
      <Info placement="left" crossOffset={10}>
        Enable the visual representation of the {type} vector for each ball.
      </Info>
    </Switch>
  )
}

export default VectorControl
