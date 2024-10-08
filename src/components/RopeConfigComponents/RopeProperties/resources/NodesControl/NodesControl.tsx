import Info from "../../../../Info/Info"
import NumberInput from "../../../../NumberInput/NumberInput"
import type { NodesControlProps } from "./NodesControl_types"

function NodesControl({ nodesHooks }: NodesControlProps): JSX.Element {
  return (
    <div className="flex flex-row gap-2">
      <NumberInput
        minValue={2}
        formatOptions={{ maximumFractionDigits: 0 }}
        step={0.1}
        className="gap-3"
        {...nodesHooks}
      >
        Nodes:
      </NumberInput>
      <Info placement="top" crossOffset={-30}>
        Number of balls in the rope.
      </Info>
    </div>
  )
}

export default NodesControl
