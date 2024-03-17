import useMoveCollection from "../../hooks/useMoveCollection/useMoveCollection"
import type { ConfigCollectionProps } from "../ConfigCollection/ConfigCollection_types"
import ConfigSection from "../ConfigSection/ConfigSection"
import ManualControl from "./resources/ManualControl/ManualControl"
import MoveControl from "./resources/MoveControl/MoveControl"
import SizeControl from "./resources/SizeControl/SizeControl"

function MoveCollection({ item }: ConfigCollectionProps): JSX.Element {
  const { moveControlProps, sizeControlProps, manualControlProps } =
    useMoveCollection(item)

  return (
    <ConfigSection title="Position and Size">
      <ManualControl {...manualControlProps} />
      <MoveControl {...moveControlProps} />
      <SizeControl {...sizeControlProps} />
    </ConfigSection>
  )
}

export default MoveCollection
