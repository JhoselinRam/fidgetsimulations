import type { ConfigCollectionProps } from "../ConfigCollection/ConfigCollection_types"
import VectorColor from "./VectorColor/VectorColor"
import VectorOpacity from "./VectorOpacity/VectorOpacity"
import VectorSize from "./VectorSize/VectorSize"

function VectorConfig({ item }: ConfigCollectionProps): JSX.Element {
  return (
    <>
      <VectorSize item={item} />
      <VectorColor item={item} />
      <VectorOpacity item={item} />
    </>
  )
}

export default VectorConfig
