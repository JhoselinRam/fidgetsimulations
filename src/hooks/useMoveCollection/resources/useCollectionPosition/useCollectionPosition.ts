import { useState, type Dispatch, useEffect, useCallback } from "react"
import type {
  CollectionOrder,
  MainState,
  MainStateAction
} from "../../../useMainState/useMainState_types"
import type { UseCollectionPosition } from "./useCollectionPosition_types"
import { getGraphicalCollection } from "../../../useMainState/useMainState"
import { toRounded } from "../../../../auxiliary/toRounded"

function useCollectionPosition(
  item: CollectionOrder,
  state: MainState,
  dispatch: Dispatch<MainStateAction>
): UseCollectionPosition {
  const collection = getGraphicalCollection(item, state)
  const positionX = collection == null ? 0 : collection.positionX
  const positionY = collection == null ? 0 : collection.positionY
  const [x, setX] = useState(positionX)
  const [y, setY] = useState(positionY)

  // -------------------------------------------------------------
  // Called when the value on the numeric input is about to change
  const changeX = useCallback(
    (newX: number): void => {
      const newPositionX = toRounded(
        newX,
        import.meta.env.VITE_ROUNDED_DECIMALS
      )
      dispatch({
        type: "graphic@positionX",
        payload: {
          ...item,
          positionX: newPositionX
        }
      })
      setX(newPositionX)
    },
    [dispatch, item]
  )

  const changeY = useCallback(
    (newY: number): void => {
      const newPositionY = toRounded(
        newY,
        import.meta.env.VITE_ROUNDED_DECIMALS
      )
      dispatch({
        type: "graphic@positionY",
        payload: {
          ...item,
          positionY: newPositionY
        }
      })
      setY(newPositionY)
    },
    [dispatch, item]
  )

  // -------------------------------------------------------------
  // Called when the position change from outside the numeric input

  useEffect(() => {
    changeX(positionX)
  }, [positionX, changeX])

  useEffect(() => {
    changeY(positionY)
  }, [positionY, changeY])

  // -------------------------------------------------------------

  return {
    x,
    y,
    changeX,
    changeY
  }
}

export default useCollectionPosition
