import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import LinkDynamics from "../../LinkConfigComponents/LinkDynamics/LinkDynamics"
import LinkProperties from "../../LinkConfigComponents/LinkProperties/LinkProperties"

function ConfigRod({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <LinkDynamics
        item={item}
        lengthInfo="The length between the center of each ball to be enforced."
      />
      <LinkProperties item={item} />
    </ConfigCollection>
  )
}

export default ConfigRod
