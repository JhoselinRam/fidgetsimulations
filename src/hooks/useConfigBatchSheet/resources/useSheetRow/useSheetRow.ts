import type {
  ConfigBatchRow,
  SheetChangeCallback,
  SheetPropTypeByName
} from "../../useConfigBatchSheet_types"
import type {
  RowPropState,
  SheetPropHooks,
  UseSheetRow
} from "./useSheetRow_types"

function useSheetRow(
  data: ConfigBatchRow,
  index: number,
  changeSheetState: SheetChangeCallback
): UseSheetRow {
  const changeHooks: SheetPropHooks = {
    name: generateHooks("name", index, changeSheetState),
    positionX: generateHooks("positionX", index, changeSheetState),
    positionY: generateHooks("positionY", index, changeSheetState),
    velocityX: generateHooks("velocityX", index, changeSheetState),
    velocityY: generateHooks("velocityY", index, changeSheetState),
    mass: generateHooks("mass", index, changeSheetState),
    charge: generateHooks("charge", index, changeSheetState),
    color: generateHooks("color", index, changeSheetState),
    radius: generateHooks("radius", index, changeSheetState),
    deleteBall: generateHooks("deleteBall", index, changeSheetState)
  }

  const rowPropState = getRowPropState(data, changeHooks)

  return rowPropState
}

export default useSheetRow

function generateHooks<T extends keyof ConfigBatchRow>(
  prop: T,
  index: number,
  changeSheetState: SheetChangeCallback
): (value: SheetPropTypeByName<T>) => void {
  return (value) => {
    changeSheetState(prop, value, index)
  }
}

function getRowPropState(
  values: ConfigBatchRow,
  changeHooks: SheetPropHooks
): RowPropState {
  const defaultRowState: RowPropState = {
    name: { value: "", changeValue: () => false },
    color: { value: "", changeValue: () => false },
    positionX: { value: 0, changeValue: () => false },
    positionY: { value: 0, changeValue: () => false },
    velocityX: { value: 0, changeValue: () => false },
    velocityY: { value: 0, changeValue: () => false },
    mass: { value: 0, changeValue: () => false },
    charge: { value: 0, changeValue: () => false },
    radius: { value: 0, changeValue: () => false },
    deleteBall: { value: false, changeValue: () => false }
  }

  return Object.keys(changeHooks).reduce<RowPropState>(
    (result, key) => {
      ;(result[key as keyof RowPropState] as unknown) = {
        value: values[key as keyof ConfigBatchRow],
        changeValue: changeHooks[key as keyof SheetPropHooks]
      }

      return result
    },
    { ...defaultRowState }
  )
}
