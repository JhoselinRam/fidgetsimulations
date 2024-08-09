import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import RopeProperties from "../../RopeConfigComponents/RopeProperties/RopeProperties"

function ConfigRope({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <RopeProperties />
    </ConfigCollection>
  )
}

export default ConfigRope
