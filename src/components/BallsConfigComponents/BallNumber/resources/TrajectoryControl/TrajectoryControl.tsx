import Info from "../../../../Info/Info"
import Switch from "../../../../Switch/Switch"
import type { TrajectoryControlProps } from "./TrajectoryControl_types"

function TrajectoryControl({
  changeTrajectory,
  enableTrajectory
}: TrajectoryControlProps): JSX.Element {
  return (
    <Switch isSelected={enableTrajectory} onChange={changeTrajectory}>
      Path
      <Info placement="left" crossOffset={10}>
        Show the trajectories of the balls.
      </Info>
    </Switch>
  )
}

export default TrajectoryControl
