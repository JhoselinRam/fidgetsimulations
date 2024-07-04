import useVectorSize from "../../../hooks/useVectorSize/useVectorSize"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import ConfigSection from "../../ConfigSection/ConfigSection"
import HeaderControl from "./resources/HeaderControl/HeaderControl"
import VectorSizeControl from "./resources/SizeControl/SizeControl"

function VectorSize({ item }: ConfigCollectionProps): JSX.Element {
  const { enableHooks, ...sizeHooks } = useVectorSize(item)

  return (
    <ConfigSection title="Size">
      <HeaderControl {...enableHooks} />
      <VectorSizeControl type={item.type} {...sizeHooks} />
    </ConfigSection>
  )
}

export default VectorSize
