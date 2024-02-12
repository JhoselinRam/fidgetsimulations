import type {
  AxisDomain,
  GraphicState
} from "../GraphicElement/GraphicElement_types"

// Simulation window type
export interface LinechartState extends GraphicState, AxisDomain {}
