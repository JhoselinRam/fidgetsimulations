import VectorControl from "../VectorControl/VectorControl"
import type { VectorEnableControlProps } from "./VectorEnableControl_types"

function VectorEnableControl({
  accelerationVectorHooks,
  velocityVectorHooks
}: VectorEnableControlProps): JSX.Element {
  return (
    <div className="flex flex-col w-full">
      <h3 className="text-zinc-300 pl-2">Vectors</h3>
      <div className="flex flex-col gap-2 border border-tuatara-600 rounded-md p-2 w-full">
        <VectorControl type="velocity" {...velocityVectorHooks} />
        <VectorControl type="acceleration" {...accelerationVectorHooks} />
      </div>
    </div>
  )
}

export default VectorEnableControl
