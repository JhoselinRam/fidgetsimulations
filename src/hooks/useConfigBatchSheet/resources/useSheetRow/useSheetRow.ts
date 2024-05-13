import type { UseSheetRow } from "./useSheetRow_types"
import type { ConfigBatchRow } from "../../../useConfigBatchModal/useConfigBatchModal_types"
import type {
  SheetCellSelectionCallback,
  SheetSelectionModeCallback
} from "../../useConfigBatchSheet_types"
import useCellData from "../useCellData/useCellData"

function useSheetRow(
  data: ConfigBatchRow,
  index: number,
  setSelectedCell: SheetCellSelectionCallback,
  setSelectionMode: SheetSelectionModeCallback,
  blurCell: () => void
): UseSheetRow {
  const name = useCellData(
    data.name,
    index,
    "name",
    setSelectedCell,
    setSelectionMode,
    blurCell
  )
  const positionX = useCellData(
    data.positionX,
    index,
    "positionX",
    setSelectedCell,
    setSelectionMode,
    blurCell
  )
  const positionY = useCellData(
    data.positionY,
    index,
    "positionY",
    setSelectedCell,
    setSelectionMode,
    blurCell
  )
  const velocityX = useCellData(
    data.velocityX,
    index,
    "velocityX",
    setSelectedCell,
    setSelectionMode,
    blurCell
  )
  const velocityY = useCellData(
    data.velocityY,
    index,
    "velocityY",
    setSelectedCell,
    setSelectionMode,
    blurCell
  )
  const mass = useCellData(
    data.mass,
    index,
    "mass",
    setSelectedCell,
    setSelectionMode,
    blurCell
  )
  const charge = useCellData(
    data.charge,
    index,
    "charge",
    setSelectedCell,
    setSelectionMode,
    blurCell
  )
  const radius = useCellData(
    data.radius,
    index,
    "radius",
    setSelectedCell,
    setSelectionMode,
    blurCell
  )
  const color = useCellData(
    data.color,
    index,
    "color",
    setSelectedCell,
    setSelectionMode,
    blurCell
  )
  const deleteBall = useCellData(
    data.deleteBall,
    index,
    "deleteBall",
    setSelectedCell,
    setSelectionMode,
    blurCell
  )

  return {
    name,
    positionX,
    positionY,
    velocityX,
    velocityY,
    mass,
    charge,
    radius,
    color,
    deleteBall
  }
}

export default useSheetRow
