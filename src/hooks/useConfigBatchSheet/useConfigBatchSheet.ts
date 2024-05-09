import {
  type KeyboardEvent,
  useState,
  type RefObject,
  useRef,
  useEffect
} from "react"
import type { ConfigBatchRow } from "../useConfigBatchModal/useConfigBatchModal_types"
import type {
  SheetSelectionMode,
  UseConfigBatchSheet
} from "./useConfigBatchSheet_types"

function useConfigBatchSheet(
  rows: ConfigBatchRow[],
  gridElement: RefObject<HTMLDivElement>,
  cellElement: RefObject<HTMLDivElement>
): UseConfigBatchSheet {
  const columnSelected = useRef(0)
  const rowSelected = useRef(0)
  const [selectionMode, setSelectionMode] = useState<SheetSelectionMode>("view")

  useEffect(() => {
    if (gridElement.current == null) return
    if (cellElement.current == null) return

    const elementRect = gridElement.current.getBoundingClientRect()
    const width = (elementRect.width - 24) / 10
    const height = elementRect.height / (rows.length + 1)

    cellElement.current.style.width = `${width}px`
    cellElement.current.style.height = `${height}px`

    const newLeft =
      24 +
      ((gridElement.current.getBoundingClientRect().width - 24) / 10) *
        columnSelected.current

    const newTop =
      (gridElement.current.getBoundingClientRect().height / (rows.length + 1)) *
      (rowSelected.current + 1)

    cellElement.current.style.top = `${newTop}px`
    cellElement.current.style.left = `${newLeft}px`
  }, [cellElement, gridElement, rows])

  function shiftSelectionColumn(direction: "left" | "right"): void {
    if (gridElement.current == null) return
    if (cellElement.current == null) return
    if (columnSelected.current === 9 && direction === "right") return
    if (columnSelected.current === 0 && direction === "left") return

    columnSelected.current =
      direction === "right"
        ? columnSelected.current + 1
        : direction === "left"
          ? columnSelected.current - 1
          : columnSelected.current

    const newLeft =
      24 +
      ((gridElement.current.getBoundingClientRect().width - 24) / 10) *
        columnSelected.current

    cellElement.current.style.left = `${newLeft}px`
  }

  function shiftSelectionRow(direction: "up" | "down"): void {
    if (gridElement.current == null) return
    if (cellElement.current == null) return
    const maxRow = rows.length - 1

    if (rowSelected.current === 0 && direction === "up") return
    if (rowSelected.current === maxRow && direction === "down") return

    rowSelected.current =
      direction === "up"
        ? rowSelected.current - 1
        : direction === "down"
          ? rowSelected.current + 1
          : rowSelected.current

    const newTop =
      (gridElement.current.getBoundingClientRect().height / (rows.length + 1)) *
      (rowSelected.current + 1)
    cellElement.current.style.top = `${newTop}px`
  }

  function arrowNavigation(e: KeyboardEvent): void {
    if (selectionMode === "edit") return

    if (e.key === "ArrowUp") shiftSelectionRow("up")
    if (e.key === "ArrowDown") shiftSelectionRow("down")
    if (e.key === "ArrowLeft") shiftSelectionColumn("left")
    if (e.key === "ArrowRight") shiftSelectionColumn("right")
    if (e.key === "Enter") setSelectionMode("edit")
  }

  return {
    selectionMode,
    arrowNavigation
  }
}

export default useConfigBatchSheet
