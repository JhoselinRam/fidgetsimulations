import BallNumber from "../../BallsConfigComponents/BallNumber/BallNumber"
import BallDynamicProperties from "../../BallsConfigComponents/BallDynamicProperties/BallDynamicProperties"
import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import BallProperties from "../../BallsConfigComponents/BallProperties/BallProperties"
import BallRename from "../../BallsConfigComponents/BallRename/BallRename"
import BallSelect from "../../BallsConfigComponents/BallSelect/BallSelect"
import useBallSelect from "../../../hooks/useBallSelect/useBallSelect"
import BallVector from "../../BallsConfigComponents/BallVector/BallVector"
import BallTrajectory from "../../BallsConfigComponents/BallTrajectory/BallTrajectory"

function ConfigBalls({ item }: ConfigCollectionProps): JSX.Element {
  const { ballId, changeId, items, isValidSelection } = useBallSelect()

  return (
    <ConfigCollection item={item}>
      <BallNumber />
      <BallRename ballId={ballId} />
      <BallSelect ballId={ballId} changeId={changeId} items={items} />
      <BallDynamicProperties
        ballId={ballId}
        isValidSelection={isValidSelection}
      />
      <BallProperties ballId={ballId} isValidSelection={isValidSelection} />
      <BallTrajectory ballId={ballId} isValidSelection={isValidSelection} />
      <BallVector type="velocity" />
      <BallVector type="acceleration" />
    </ConfigCollection>
  )
}

export default ConfigBalls
