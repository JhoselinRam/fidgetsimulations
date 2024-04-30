import { useContext, useState } from "react"
import type {
  ConfigBatchRow,
  UseConfigBatchSheet
} from "./useConfigBatchSheet_types"
import { mainStateContext } from "../useMainState/useMainState"
import type { MainState } from "../useMainState/useMainState_types"

function useConfigBatchSheet(): UseConfigBatchSheet {
  const { mainState } = useContext(mainStateContext)
  const [rows, setRows] = useState(getInitialRows(mainState))

  return {
    rows
  }
}

export default useConfigBatchSheet

function getInitialRows(state: MainState): ConfigBatchRow[] {
  return state.balls[0].data.map((ball) => ({
    charge: ball.charge,
    color: ball.color,
    delete: false,
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
