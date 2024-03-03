import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import MoveCollection from "../../MoveCollection/MoveCollection"

function ConfigLinechart({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <ConfigCollection item={item}>
      <MoveCollection item={item}></MoveCollection>
    </ConfigCollection>
  )
}

export default ConfigLinechart
