import type {
  AspectRatioEdit,
  AxisColor,
  AxisDomain,
  GraphicState,
  Grid
} from "../GraphicElement/GraphicElement_types"

// Simulation window type
export interface LinechartState
  extends GraphicState,
    AxisDomain,
    AspectRatioEdit,
    AxisColor,
    Grid {}

export type LinechartActionType = "linechart@new"
