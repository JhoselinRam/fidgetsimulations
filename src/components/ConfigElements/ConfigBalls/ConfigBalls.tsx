import BallNumber from "../../BallsConfigComponents/BallNumber/BallNumber"
import BallDynamicProperties from "../../BallsConfigComponents/BallDynamicProperties/BallDynamicProperties"
import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import BallProperties from "../../BallsConfigComponents/BallProperties/BallProperties"

function ConfigBalls({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <BallNumber />
      <BallDynamicProperties />
      <BallProperties />
    </ConfigCollection>
  )
}

export default ConfigBalls
