import {
  type RefObject,
  useContext,
  useState,
  useEffect,
  useTransition,
  useCallback
} from "react"
import type {
  ConfigBatchRow,
  UseConfigBatchModal
} from "./useConfigBatchModal_types"
import { mainStateContext } from "../useMainState/useMainState"
import type { ConfigSheetRef } from "../../components/BallsConfigComponents/BallConfigBatchModal/resources/ConfigBatchSheet/ConfigBatchSheet_types"
import type { BallData } from "../useMainState/resources/Balls/Balls_types"
import { ballDataDefaultState } from "../useMainState/resources/Balls/defaultState"

function useConfigBatchModal(
  sheetData: RefObject<ConfigSheetRef>
): UseConfigBatchModal {
  const { mainState, dispatch } = useContext(mainStateContext)
  const [rows, setRows] = useState<ConfigBatchRow[]>([])
  const [isLoading, startTransition] = useTransition()

  const getInitialRows = useCallback((): ConfigBatchRow[] => {
    return mainState.balls[0].data.map((ball) => ({
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
      id: ball.id,
      trajectoryColor: ball.trajectoryColor,
      trajectoryFade: ball.trajectoryFade,
      trajectoryLength: ball.trajectoryLength,
      trajectoryMatchColor: ball.trajectoryMatchColor,
      trajectoryOpacity: ball.trajectoryOpacity,
      fixed: ball.fixed
    }))
  }, [mainState.balls])

  const updateRows = useCallback((): void => {
    startTransition(() => {
      const rows = getInitialRows()
      setRows(rows)
    })
  }, [getInitialRows])

  useEffect(() => {
    window.document.body.style.cursor = isLoading ? "wait" : "default"
  }, [isLoading])

  function onClose(): void {
    startTransition(() => {
      setRows([])
    })
  }

  function onAccept(): void {
    startTransition(() => {
      if (sheetData.current == null) return

      const data: BallData[] = []

      sheetData.current.getSheetData().forEach((ballData) => {
        if (ballData.deleteBall) {
          dispatch({ type: "balls@delete", payload: { id: ballData.id } })
          return
        }

        data.push(getUpdatedBall(ballData))
      })

      dispatch({ type: "ball@updateAll", payload: { data } })
      setRows([])
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
    onAccept,
    isLoading,
    onClose
  }
}

export default useConfigBatchModal
