import { type RefObject, useContext, useState } from "react"
import type {
  ConfigBatchRow,
  UseConfigBatchModal
} from "./useConfigBatchModal_types"
import { mainStateContext } from "../useMainState/useMainState"
import type { MainState } from "../useMainState/useMainState_types"
import type { ConfigSheetRef } from "../../components/BallsConfigComponents/BallConfigBatchModal/resources/ConfigBatchSheet/ConfigBatchSheet_types"
import type { BallData } from "../useMainState/resources/Balls/Balls_types"
import { ballDataDefaultState } from "../useMainState/resources/Balls/defaultState"

function useConfigBatchModal(
  sheetData: RefObject<ConfigSheetRef>
): UseConfigBatchModal {
  const { mainState, dispatch } = useContext(mainStateContext)
  const [rows, setRows] = useState(getInitialRows(mainState))

  function updateRows(): void {
    setRows(getInitialRows(mainState))
  }

  function onAccept(): void {
    if (sheetData.current == null) return

    sheetData.current.getSheetData().forEach((ballData) => {
      if (ballData.deleteBall) {
        dispatch({ type: "balls@delete", payload: { id: ballData.id } })
        return
      }

      const updatedBall = getUpdatedBall(ballData)
      dispatch({ type: "ball@update", payload: { ...updatedBall } })
    })
  }

  function getUpdatedBall(ballData: ConfigBatchRow): BallData {
    const currentBall = mainState.balls[0].data.find(
      (ball) => ball.id === ballData.id
    )
    if (currentBall == null) return { ...ballDataDefaultState }

    const updatedBall = { ...currentBall }

    ;(Object.keys(ballData) as Array<keyof ConfigBatchRow>).forEach((prop) => {
      if (prop === "deleteBall") return
      ;(updatedBall[prop] as unknown) = ballData[prop]
    })

    return updatedBall
  }

  return {
    rows,
    updateRows,
    onAccept
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
