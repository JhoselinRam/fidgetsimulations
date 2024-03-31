import Info from "../../../../Info/Info"
import MoveConfig from "../../../../MoveConfig/MoveConfig"
import type { PositionControlProps } from "./PositionControl_types"

function PositionControl({
  item,
  positionX,
  positionY
}: PositionControlProps): JSX.Element {
  return (
    <div className="w-fit pr-2 relative">
      <MoveConfig
        item={item}
        unit="m"
        step={0.03}
        actionX="container@positionX"
        actionY="container@positionY"
        valueX={positionX}
        valueY={positionY}
      />
      <div className="absolute right-0 translate-x-full top-1/2 translate-y-0.5">
        <Info placement="left" crossOffset={10}>
          The <i>(x, y)</i> coordinates correspond to the upper left corner of
          the container.
        </Info>
      </div>
    </div>
  )
}

export default PositionControl
