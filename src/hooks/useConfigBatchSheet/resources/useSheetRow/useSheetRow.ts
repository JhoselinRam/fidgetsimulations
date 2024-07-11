import type { UseSheetRow } from "./useSheetRow_types"
import type { ConfigBatchRow } from "../../../useConfigBatchModal/useConfigBatchModal_types"
import type {
  SheetCellSelectionCallback,
  SheetOnEnterCallback,
  SheetSelectionModeCallback
} from "../../useConfigBatchSheet_types"
import useCellData from "../useCellData/useCellData"
import { useImperativeHandle, type ForwardedRef } from "react"
import type { ConfigSheetRowRef } from "../../../../components/BallsConfigComponents/BallConfigBatchModal/resources/ConfigBatchSheet/resources/ConfigSheetRow/ConfigSheetRow_types"

function useSheetRow(
  data: ConfigBatchRow,
  index: number,
  setSelectedCell: SheetCellSelectionCallback,
  setSelectionMode: SheetSelectionModeCallback,
  blurCell: () => void,
  onEnter: SheetOnEnterCallback,
  ref: ForwardedRef<ConfigSheetRowRef>,
  setLastSelectedColumn: (column: number) => void
): UseSheetRow {
  const name = useCellData(
    data.name,
    index,
    "name",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )
  const positionX = useCellData(
    data.positionX,
    index,
    "positionX",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )
  const positionY = useCellData(
    data.positionY,
    index,
    "positionY",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )
  const velocityX = useCellData(
    data.velocityX,
    index,
    "velocityX",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )
  const velocityY = useCellData(
    data.velocityY,
    index,
    "velocityY",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )
  const mass = useCellData(
    data.mass,
    index,
    "mass",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )
  const charge = useCellData(
    data.charge,
    index,
    "charge",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )
  const radius = useCellData(
    data.radius,
    index,
    "radius",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )
  const color = useCellData(
    data.color,
    index,
    "color",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )
  const deleteBall = useCellData(
    data.deleteBall,
    index,
    "deleteBall",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )
  const trajectoryColor = useCellData(
    data.trajectoryColor,
    index,
    "trajectoryColor",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )
  const trajectoryFade = useCellData(
    data.trajectoryFade,
    index,
    "trajectoryFade",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )
  const trajectoryLength = useCellData(
    data.trajectoryLength,
    index,
    "trajectoryLength",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )
  const trajectoryMatchColor = useCellData(
    data.trajectoryMatchColor,
    index,
    "trajectoryMatchColor",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )
  const trajectoryOpacity = useCellData(
    data.trajectoryOpacity,
    index,
    "trajectoryOpacity",
    setSelectedCell,
    setSelectionMode,
    blurCell,
    onEnter,
    setLastSelectedColumn
  )

  function getRowData(): Omit<ConfigBatchRow, "id"> {
    return {
      name: name.value,
      positionX: positionX.value,
      positionY: positionY.value,
      velocityX: velocityX.value,
      velocityY: velocityY.value,
      mass: mass.value,
      charge: charge.value,
      radius: radius.value,
      color: color.value,
      deleteBall: deleteBall.value,
      trajectoryColor: trajectoryColor.value,
      trajectoryFade: trajectoryFade.value,
      trajectoryLength: trajectoryLength.value,
      trajectoryMatchColor: trajectoryMatchColor.value,
      trajectoryOpacity: trajectoryOpacity.value
    }
  }

  useImperativeHandle(ref, () => ({
    getRowData,
    id: data.id,
    setDeleteBall: deleteBall.onChange
  }))

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
    deleteBall,
    trajectoryColor,
    trajectoryFade,
    trajectoryLength,
    trajectoryMatchColor,
    trajectoryOpacity
  }
}

export default useSheetRow
