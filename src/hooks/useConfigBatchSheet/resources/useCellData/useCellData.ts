import { useState, useRef, type KeyboardEvent, type FocusEvent } from "react"
import type { UseCellData } from "./useCellData_types"
import type { ConfigBatchRow } from "../../../useConfigBatchModal/useConfigBatchModal_types"
import type {
  SheetCellSelectionCallback,
  SheetOnEnterCallback,
  SheetSelectionModeCallback
} from "../../useConfigBatchSheet_types"

const cellProps: Array<keyof ConfigBatchRow> = [
  "name",
  "positionX",
  "positionY",
  "velocityX",
  "velocityY",
  "mass",
  "charge",
  "radius",
  "color",
  "trajectoryLength",
  "trajectoryFade",
  "trajectoryMatchColor",
  "trajectoryColor",
  "trajectoryOpacity",
  "deleteBall"
]

function useCellData<T>(
  initialValue: T,
  index: number,
  prop: keyof ConfigBatchRow,
  setSelectedCell: SheetCellSelectionCallback,
  setSelectionMode: SheetSelectionModeCallback,
  blurCell: () => void,
  onEnter: SheetOnEnterCallback,
  setLastSelectedColumn: (column: number) => void
): UseCellData<T> {
  const [value, setValue] = useState(initialValue)
  const lastValue = useRef<T>(value)
  const follower = useRef<T>(value)

  // ---------------------- Focus ---------------------------

  function onFocus(e: FocusEvent): void {
    const cellRow = index
    const cellColumn = cellProps.indexOf(prop)

    setSelectedCell(cellRow, cellColumn)
    setSelectionMode("edit")

    lastValue.current = value

    if (prop !== "deleteBall") {
      ;(e.target as HTMLInputElement).select()
    }
  }

  // --------------------------------------------------------
  // ----------------------- Blur ---------------------------

  function onBlur(): void {
    setSelectionMode("view")

    if (prop === "color" || prop === "deleteBall") return

    if (prop === "name" && value === "") {
      setValue(lastValue.current)
      return
    }

    if (prop !== "name" && Number.isNaN(follower.current))
      setValue(lastValue.current)
  }

  // --------------------------------------------------------
  // -------------------- Key Down --------------------------

  function onKeyDown(e: KeyboardEvent): void {
    if (e.key === "Escape") {
      ;(e.target as HTMLInputElement).blur()
      blurCell()
      onChange(lastValue.current)
      return
    }

    if (e.key === "Enter") {
      blurCell()
      onEnter(e.shiftKey)
    }
  }

  // --------------------------------------------------------
  // --------------------- Change ---------------------------

  function onChange(newValue: T): void {
    let usedValue = newValue
    if (prop === "trajectoryOpacity") {
      ;(usedValue as number) = Math.round(usedValue as number)
    }
    follower.current = usedValue
    setValue(usedValue)
  }

  // --------------------------------------------------------
  // --------------------------------------------------------

  function onPointerDown(): void {
    setLastSelectedColumn(cellProps.indexOf(prop))
  }

  // --------------------------------------------------------

  return {
    value,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    onPointerDown
  }
}

export default useCellData
