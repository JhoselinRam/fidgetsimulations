import {
  type KeyboardEvent,
  type RefObject,
  useRef,
  useEffect,
  useCallback,
  type ForwardedRef,
  useImperativeHandle,
  useState
} from "react"
import type { ConfigBatchRow } from "../useConfigBatchModal/useConfigBatchModal_types"
import type {
  SheetSelectionMode,
  UseConfigBatchSheet
} from "./useConfigBatchSheet_types"
import type { ConfigSheetRowRef } from "../../components/BallsConfigComponents/BallConfigBatchModal/resources/ConfigBatchSheet/resources/ConfigSheetRow/ConfigSheetRow_types"
import type {
  ConfigSheetData,
  ConfigSheetRef
} from "../../components/BallsConfigComponents/BallConfigBatchModal/resources/ConfigBatchSheet/ConfigBatchSheet_types"

function useConfigBatchSheet(
  rows: ConfigBatchRow[],
  gridElement: RefObject<HTMLDivElement>,
  cellElement: RefObject<HTMLDivElement>,
  ref: ForwardedRef<ConfigSheetRef>
): UseConfigBatchSheet {
  const columnSelected = useRef(0)
  const rowSelected = useRef(0)
  const cellWidth = useRef(0)
  const cellHeight = useRef(0)
  const selectionMode = useRef<SheetSelectionMode>("view")
  const rowsData = useRef<ConfigSheetRowRef[]>([])
  const lastColumnSelected = useRef(0)
  const [deleteAll, setDeleteAll] = useState(false)

  // ---------------- Select Cell Size ----------------------

  const setCellSize = useCallback(() => {
    if (gridElement.current == null) return
    if (cellElement.current == null) return

    const sampleCell = gridElement.current.children[1]
    const cellRect = sampleCell.getBoundingClientRect()
    cellWidth.current = cellRect.width
    cellHeight.current = cellRect.height

    cellElement.current.style.width = `${cellWidth.current}px`
    cellElement.current.style.height = `${cellHeight.current}px`
  }, [gridElement, cellElement])

  // --------------------------------------------------------
  // ----------------- Sheet Scroll -------------------------

  const setSheetScroll = useCallback(
    (cellTop: number, cellLeft: number) => {
      if (gridElement.current == null) return

      const containerElement = gridElement.current
        .parentElement as HTMLDivElement
      const cellBottom = cellTop + cellHeight.current
      const cellRight = cellLeft + cellWidth.current
      const containerTop = containerElement.scrollTop
      const containerBottom = containerTop + containerElement.clientHeight
      const containerLeft = containerElement.scrollLeft
      const containerRight = containerLeft + containerElement.clientWidth

      if (rowSelected.current === 0) containerElement.scrollTop = 0

      if (columnSelected.current === 0) containerElement.scrollLeft = 0

      if (cellRight > containerRight)
        containerElement.scrollLeft += cellRight - containerRight

      if (cellLeft < containerLeft)
        containerElement.scrollLeft -= containerLeft - cellLeft

      if (cellTop < containerTop)
        containerElement.scrollTop -= containerTop - cellTop

      if (cellBottom > containerBottom)
        containerElement.scrollTop += cellBottom - containerBottom
    },
    [gridElement]
  )

  // --------------------------------------------------------
  // --------------- Select Cell Position -------------------

  const setCellPosition = useCallback((): void => {
    if (cellElement.current == null) return

    const newTop = cellHeight.current * (rowSelected.current + 1)
    const newLeft =
      cellWidth.current * columnSelected.current +
      parseInt(import.meta.env.VITE_CONFIG_SHEET_INDEX_WIDTH)

    cellElement.current.style.top = `${newTop}px`
    cellElement.current.style.left = `${newLeft}px`

    setSheetScroll(newTop, newLeft)
  }, [cellElement, setSheetScroll])

  // --------------------------------------------------------
  // ----------------- Initial Config -----------------------

  useEffect(() => {
    if (gridElement.current == null) return
    const grid = gridElement.current
    const resizeObserver = new ResizeObserver(() => {
      setCellSize()
      setCellPosition()
    })

    grid.focus()
    resizeObserver.observe(grid)

    return (): void => {
      resizeObserver.disconnect()
    }
  }, [gridElement, setCellPosition, setCellSize])

  useEffect(() => {
    setCellSize()
    setCellPosition()
  }, [setCellSize, setCellPosition])

  // --------------------------------------------------------
  // -------------- Shift Selected Column -------------------

  function shiftSelectionColumn(direction: "left" | "right"): void {
    if (columnSelected.current === 9 && direction === "right") return
    if (columnSelected.current === 0 && direction === "left") return

    columnSelected.current +=
      direction === "right" ? 1 : direction === "left" ? -1 : 0

    lastColumnSelected.current = columnSelected.current

    setCellPosition()
  }

  // --------------------------------------------------------
  // --------------- Shift Selected Row ---------------------

  function shiftSelectionRow(direction: "up" | "down"): void {
    const maxRow = rows.length - 1

    if (rowSelected.current === 0 && direction === "up") return
    if (rowSelected.current === maxRow && direction === "down") return

    rowSelected.current +=
      direction === "up" ? -1 : direction === "down" ? +1 : 0

    setCellPosition()
  }

  // --------------------------------------------------------
  // ---------------- Set selected cell ----------------------

  function setSelectedCell(row: number, column: number): void {
    const maxRow = rows.length - 1
    const maxColumn = 9
    const newRow = row < 0 ? 0 : row > maxRow ? maxRow : row
    const newColumn = column < 0 ? 0 : column > maxColumn ? maxColumn : column

    rowSelected.current = newRow
    columnSelected.current = newColumn

    setCellPosition()
  }

  // --------------------------------------------------------
  // --------------- Arrow Navigation -----------------------

  function arrowNavigation(e: KeyboardEvent): void {
    if (selectionMode.current === "edit") return

    if (e.key === "ArrowUp") {
      e.preventDefault()
      shiftSelectionRow("up")
    }
    if (e.key === "ArrowDown") {
      e.preventDefault()
      shiftSelectionRow("down")
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      shiftSelectionColumn("left")
    }
    if (e.key === "ArrowRight") {
      e.preventDefault()
      shiftSelectionColumn("right")
    }
    if (e.key === "Enter") {
      selectionMode.current = "edit"
      focusSelectedCell()
    }
  }

  // --------------------------------------------------------
  // ------------- Focus the selected cell ------------------

  function focusSelectedCell(): void {
    if (gridElement.current == null) return

    const columnsPerRow = 11
    const deleteColumn = 9
    const cellIndex =
      columnsPerRow * (rowSelected.current + 1) + columnSelected.current + 1
    const selectedCell = gridElement.current.children[cellIndex]

    if (selectedCell == null) return
    const cellTag = columnSelected.current === deleteColumn ? "button" : "input"
    const cellInput = selectedCell.getElementsByTagName(cellTag)[0]

    cellInput?.focus()
  }

  // --------------------------------------------------------
  // ---------------- Set Selection Mode --------------------

  function setSelectionMode(mode: SheetSelectionMode): void {
    if (mode !== "edit" && mode !== "view") return

    selectionMode.current = mode
  }

  // --------------------------------------------------------
  // ------------------- Blur Cell --------------------------

  function blurCell(): void {
    gridElement.current?.focus()
  }

  // --------------------------------------------------------
  // ------------------ On Enter key ------------------------

  function onEnter(shiftKey: boolean): void {
    const direction = shiftKey ? "up" : "down"
    shiftSelectionRow(direction)
    columnSelected.current = lastColumnSelected.current

    focusSelectedCell()
  }

  // --------------------------------------------------------
  // --------------------------------------------------------

  function setLastSelectedColumn(column: number): void {
    const maxColumn = 9
    const newColumn = column < 0 ? 0 : column > maxColumn ? maxColumn : column

    lastColumnSelected.current = newColumn
  }

  // --------------------------------------------------------
  // ---------------- Get row data ref ----------------------

  function getRowDataRef(data: ConfigSheetRowRef): void {
    if (data == null) return
    const index = rowsData.current.findIndex((row) => row.id === data.id)

    if (index === -1) rowsData.current.push(data)
    else rowsData.current[index] = data
  }

  // --------------------------------------------------------
  // ---------------- Get sheet data ------------------------

  function getSheetData(): ConfigSheetData {
    return rowsData.current.map((row) => ({ id: row.id, ...row.getRowData() }))
  }

  useImperativeHandle(ref, () => ({ getSheetData }))

  // --------------------------------------------------------
  // ------- Delete ball general checkbox callback ----------

  function onDeleteAll(value: boolean): void {
    setDeleteAll(value)

    if (rowsData.current == null) return
    rowsData.current.forEach((ball) => {
      ball.setDeleteBall(value)
    })
  }

  // --------------------------------------------------------

  return {
    arrowNavigation,
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    getRowDataRef,
    setLastSelectedColumn,
    deleteAllValue: deleteAll,
    onDeleteAll
  }
}

export default useConfigBatchSheet
