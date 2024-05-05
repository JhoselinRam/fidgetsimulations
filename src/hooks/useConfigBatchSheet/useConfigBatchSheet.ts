import { useContext, useState } from "react"
import type {
  ConfigBatchRow,
  SheetPropTypeByName,
  UseConfigBatchSheet
} from "./useConfigBatchSheet_types"
import { mainStateContext } from "../useMainState/useMainState"
import type { MainState } from "../useMainState/useMainState_types"

function useConfigBatchSheet(): UseConfigBatchSheet {
  const { mainState } = useContext(mainStateContext)
  const [rows, setRows] = useState(getInitialRows(mainState))

  function changeSheetState<T extends keyof ConfigBatchRow>(
    prop: T,
    value: SheetPropTypeByName<T>,
    index: number
  ): void {
    const validIndex = Math.round(index)
    if (validIndex < 0 || validIndex > rows.length - 1) return

    const actualValue = rows[validIndex][prop]
    if (!isValidType(value, actualValue)) return
    if (actualValue === value) return

    const newRows = [...rows]
    newRows[validIndex][prop] = value

    setRows(newRows)
  }

  return {
    rows,
    changeSheetState
  }
}

export default useConfigBatchSheet

function getInitialRows(state: MainState): ConfigBatchRow[] {
  return state.balls[0].data.map((ball) => ({
    charge: ball.charge,
    color: ball.color,
    deleteBall: false,
    mass: ball.mass,
    name: ball.name,
    positionX: ball.positionX,
    positionY: ball.positionY,
    radius: ball.radius,
    velocityX: ball.velocityX,
    velocityY: ball.velocityY,
    id: ball.id
  }))
}

function isValidType<T>(data: unknown, test: T): data is T {
  return typeof test === typeof data
}
