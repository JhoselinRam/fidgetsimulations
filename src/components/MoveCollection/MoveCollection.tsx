import useMoveCollection from "../../hooks/useMoveCollection/useMoveCollection"
import type { ConfigCollectionProps } from "../ConfigCollection/ConfigCollection_types"
import ManualControl from "./resources/ManualControl/ManualControl"
import MoveControl from "./resources/MoveControl/MoveControl"
import SizeControl from "./resources/SizeControl/SizeControl"

function MoveCollection({ item }: ConfigCollectionProps): JSX.Element {
  const { moveControlProps, sizeControlProps, manualControlProps } =
    useMoveCollection(item)

  return (
    <section className="bg-tuatara-800 mt-4 border-2 border-tuatara-500 rounded-md py-1 px-3 flex flex-col">
      <ManualControl {...manualControlProps} />
      <MoveControl {...moveControlProps} />
      <SizeControl {...sizeControlProps} />
    </section>
  )
}

export default MoveCollection
