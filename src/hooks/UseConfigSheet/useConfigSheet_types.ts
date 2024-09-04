import type { SheetState } from "../useMainState/resources/Sheet/Sheet_types"
import type { UseSheetBallProperties } from "./resources/useSheetBallProperties/useSheetBallProperties_types"
import type { UseSheetDynamics } from "./resources/useSheetDynamics/useSheetDynamics_types"
import type { UseSheetProperties } from "./resources/useSheetProperties/useSheetProperties_types"

export interface UseConfigSheet {
  propertiesHooks: UseSheetProperties
  dynamicsHooks: UseSheetDynamics
  ballPropertiesHooks: UseSheetBallProperties
  createSheet: () => void
}

export interface SheetProps extends Omit<SheetState, "name" | "id" | "type"> {}

export interface SheetCurrentProps extends SheetProps {
  xDiff: number
  yDiff: number
}
