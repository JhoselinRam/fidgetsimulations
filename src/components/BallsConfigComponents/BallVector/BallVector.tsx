import type { VectorConfigType } from "../BallConfigComponents_types"
import VectorColor from "../VectorColor/VectorColor"
import VectorOpacity from "../VectorOpacity/VectorOpacity"
import VectorSize from "../VectorSize/VectorSize"

function BallVector({ type }: VectorConfigType): JSX.Element {
  return (
    <>
      <VectorColor type={type} />
      <VectorOpacity type={type} />
      <VectorSize type={type} />
    </>
  )
}

export default BallVector
