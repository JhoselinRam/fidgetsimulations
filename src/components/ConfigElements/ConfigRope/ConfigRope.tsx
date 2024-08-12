import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import CreateRope from "../../RopeConfigComponents/CreateRope/CreateRope"
import RopeBallProperties from "../../RopeConfigComponents/RopeBallProperties/RopeBallProperties"
import RopeDynamics from "../../RopeConfigComponents/RopeDynamics/RopeDynamics"
import RopeProperties from "../../RopeConfigComponents/RopeProperties/RopeProperties"

function ConfigRope({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <RopeProperties />
      <RopeDynamics />
      <RopeBallProperties />
      <CreateRope />
    </ConfigCollection>
  )
}

export default ConfigRope
