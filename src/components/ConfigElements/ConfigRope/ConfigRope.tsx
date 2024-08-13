import useConfigRope from "../../../hooks/useConfigRope/useConfigRope"
import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import CreateRope from "../../RopeConfigComponents/CreateRope/CreateRope"
import RopeBallProperties from "../../RopeConfigComponents/RopeBallProperties/RopeBallProperties"
import RopeDynamics from "../../RopeConfigComponents/RopeDynamics/RopeDynamics"
import RopeProperties from "../../RopeConfigComponents/RopeProperties/RopeProperties"

function ConfigRope({ item }: ConfigCollectionProps): JSX.Element {
  const { ballPropertiesHooks, dynamicsHooks, propertiesHooks, onCreate } =
    useConfigRope(item)

  return (
    <ConfigCollection item={item}>
      <RopeProperties {...propertiesHooks} />
      <RopeDynamics {...dynamicsHooks} />
      <RopeBallProperties {...ballPropertiesHooks} />
      <CreateRope onCreate={onCreate} />
    </ConfigCollection>
  )
}

export default ConfigRope
