import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import ContainerPosition from "../../ContainerConfigComponents/ContainerPosition/ContainerPosition"
import ContainerShape from "../../ContainerConfigComponents/ContainerShape/ContainerShape"

function ConfigContainer({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <ContainerPosition item={item} />
      <ContainerShape item={item} />
    </ConfigCollection>
  )
}

export default ConfigContainer
