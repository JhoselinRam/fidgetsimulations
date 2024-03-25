import type {
  AspectRatioEdit,
  AxisColor,
  AxisDomain,
  GraphicState
} from "../GraphicElement/GraphicElement_types"

// Simulation window type
export interface LinechartState
  extends GraphicState,
    AxisDomain,
    AspectRatioEdit,
    AxisColor {}

export type LinechartActionType = "linechart@new"
