import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { SheetProps } from "../../useConfigSheet_types"
import useSheetNodes from "../useSheetNodes/useSheetNodes"
import useSheetRecursion from "../useSheetRecursion/useSheetRecursion"
import useSheetSize from "../useSheetSize/useSheetSize"
import type { UseSheetProperties } from "./useSheetProperties_types"

function useSheetProperties(
  item: CollectionOrder,
  props: SheetProps
): UseSheetProperties {
  const sizeHooks = useSheetSize(item, props)
  const nodesHooks = useSheetNodes(item, props)
  const recursionHooks = useSheetRecursion(item, props)

  return {
    nodesHooks,
    recursionHooks,
    sizeHooks
  }
}

export default useSheetProperties
