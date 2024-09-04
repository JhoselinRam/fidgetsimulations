import useConfigRope from "../../../hooks/useConfigRope/useConfigRope"
import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import CreateLinkObject from "../../LinkObjectConfigComponents/CreateLinkObject/CreateLinkObject"
import LinkObjectBallProperties from "../../LinkObjectConfigComponents/LinkObjectBallProperties/LinkObjectBallProperties"
import LinkObjectDynamics from "../../LinkObjectConfigComponents/LinkObjectDynamics/LinkObjectDynamics"
import RopeProperties from "../../RopeConfigComponents/RopeProperties/RopeProperties"

function ConfigRope({ item }: ConfigCollectionProps): JSX.Element {
  const { ballPropertiesHooks, dynamicsHooks, propertiesHooks, onCreate } =
    useConfigRope(item)

  return (
    <ConfigCollection item={item}>
      <RopeProperties {...propertiesHooks} />
      <LinkObjectDynamics {...dynamicsHooks} type="rope" />
      <LinkObjectBallProperties {...ballPropertiesHooks} type="rope" />
      <CreateLinkObject onCreate={onCreate} />
    </ConfigCollection>
  )
}

export default ConfigRope
