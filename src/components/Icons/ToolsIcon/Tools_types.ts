import type { KnobPositions } from "../../../hooks/useToolButton/useToolButton_types"

export interface ToolsIconsProps {
  className?: string
  knobsPosition: KnobPositions
}

export type Positions = {
  [k in KnobPositions]: readonly [number, number, number]
}
