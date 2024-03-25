import type {
  AspectRatioEdit,
  AxisColor,
  AxisDomain,
  GraphicState
} from "../GraphicElement/GraphicElement_types"

// Simulation window type
export interface SimulationWindowState
  extends GraphicState,
    AxisDomain,
    AspectRatioEdit,
    AxisColor {}
