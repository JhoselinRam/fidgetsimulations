import useBindState from "../../../useBindState/useBindState"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { SheetProps } from "../../useConfigSheet_types"
import type { UseSheetRecursion } from "./useSheetRecursion_types"

function useSheetRecursion(
  item: CollectionOrder,
  props: SheetProps
): UseSheetRecursion {
  const recursionProps = useBindState(item, props.recursion, "sheet@recursion")

  function changeRecursion(value: number): void {
    const usedValue = Math.round(value)

    recursionProps.changeValue(usedValue)
  }

  return {
    value: recursionProps.value,
    onChange: changeRecursion
  }
}

export default useSheetRecursion
