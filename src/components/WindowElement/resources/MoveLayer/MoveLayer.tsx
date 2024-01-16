import type { MoveLayerProps } from "./MoveLayer_types"

function MoveLayer({ moveLayerCallback }: MoveLayerProps): JSX.Element {
  return (
    <div
      className="touch-none absolute top-0 bottom-0 left-0 right-0 bg-accent-blue-500/20 hover:cursor-grab"
      onPointerDown={moveLayerCallback}
    ></div>
  )
}

export default MoveLayer
