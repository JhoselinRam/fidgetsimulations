import { useContext, useState } from "react"
import type {
  ConfigBatchRow,
  UseConfigBatchModal
} from "./useConfigBatchModal_types"
import { mainStateContext } from "../useMainState/useMainState"
import type { MainState } from "../useMainState/useMainState_types"

function useConfigBatchModal(): UseConfigBatchModal {
  const { mainState } = useContext(mainStateContext)
  const [rows, setRows] = useState(getInitialRows(mainState))

  function updateRows(): void {
    setRows(getInitialRows(mainState))
  }

  return {
    rows,
    updateRows
  }
}

export default useConfigBatchModal

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
