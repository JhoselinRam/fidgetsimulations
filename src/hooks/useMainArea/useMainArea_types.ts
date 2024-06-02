import type { GraphicSelector } from "../useMainState/resources/GraphicElement/GraphicElement_types"
import type { GraphicCollection } from "../useMainState/useMainState_types"

export interface UseMainArea {
  graphicSelector: GraphicSelector
  graphicOrder: GraphicCollection[]
}
