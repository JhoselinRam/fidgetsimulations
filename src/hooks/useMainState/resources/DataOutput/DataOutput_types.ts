import type {
  AxisDomain,
  GraphicState
} from "../GraphicElement/GraphicElement_types"

// Simulation window type
export interface DataOutputState extends GraphicState, AxisDomain {}
