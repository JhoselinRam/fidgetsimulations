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
      {`${type[0].toUpperCase()}${type.slice(1)} vector`}
      <Info placement="left" crossOffset={20}>
        Enable the visual representation of the {type} vector for each ball.
      </Info>
    </Switch>
  )
}

export default VectorControl
