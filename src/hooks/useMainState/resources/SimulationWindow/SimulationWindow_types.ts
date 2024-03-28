import type {
  AspectRatioEdit,
  AxisColor,
  AxisDomain,
  GraphicState,
  Grid
} from "../GraphicElement/GraphicElement_types"

// Simulation window type
export interface SimulationWindowState
  extends GraphicState,
    AxisDomain,
    AspectRatioEdit,
    AxisColor,
    Grid {}
