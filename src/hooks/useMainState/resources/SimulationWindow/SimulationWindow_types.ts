import type { GraphicState } from "../GraphicElement/GraphicElement_types"

// Simulation window type
export interface SimulationWindowState extends GraphicState, AxisDomain {}

// -------------------- Axis Domain -----------------------

interface AxisDomain {
  startX: number
  endX: number
  startY: number
  endY: number
}

// --------------------------------------------------------
