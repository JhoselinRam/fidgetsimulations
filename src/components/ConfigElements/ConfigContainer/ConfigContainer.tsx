import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import ContainerPosition from "../../ContainerConfigComponents/ContainerPosition/ContainerPosition"

function ConfigContainer({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <ContainerPosition item={item} />
    </ConfigCollection>
  )
}

export default ConfigContainer
