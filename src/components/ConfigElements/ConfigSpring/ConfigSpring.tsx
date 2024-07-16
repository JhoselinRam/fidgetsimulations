import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import LinkDynamics from "../../LinkConfigComponents/LinkDynamics/LinkDynamics"
import LinkProperties from "../../LinkConfigComponents/LinkProperties/LinkProperties"

function ConfigSpring({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <LinkDynamics
        item={item}
        lengthInfo="The length of the spring at rest."
      />
      <LinkProperties item={item} />
    </ConfigCollection>
  )
}

export default ConfigSpring
