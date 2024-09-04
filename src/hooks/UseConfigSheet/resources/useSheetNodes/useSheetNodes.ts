import useBindState from "../../../useBindState/useBindState"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { SheetProps } from "../../useConfigSheet_types"
import type { UseSheetNodes } from "./useSheetNodes_types"

function useSheetNodes(
  item: CollectionOrder,
  props: SheetProps
): UseSheetNodes {
  const columnsProps = useBindState(item, props.columns, "sheet@columns")
  const rowsProps = useBindState(item, props.rows, "sheet@rows")

  function changeColumns(value: number): void {
    const usedValue = Math.round(value)
    columnsProps.changeValue(usedValue)
  }

  function changeRows(value: number): void {
    const usedValue = Math.round(value)
    rowsProps.changeValue(usedValue)
  }

  return {
    columnsHooks: {
      value: columnsProps.value,
      onChange: changeColumns
    },
    rowsHooks: {
      value: rowsProps.value,
      onChange: changeRows
    }
  }
}

export default useSheetNodes
