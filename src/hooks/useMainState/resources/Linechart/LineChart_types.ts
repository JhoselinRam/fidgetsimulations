import type {
  AspectRatioEdit,
  AxisDomain,
  GraphicState
} from "../GraphicElement/GraphicElement_types"

// Simulation window type
export interface LinechartState
  extends GraphicState,
    AxisDomain,
    AspectRatioEdit {}

export type LinechartActionType = "linechart@new"
