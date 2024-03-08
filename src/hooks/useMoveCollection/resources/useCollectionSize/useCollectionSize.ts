import { useState, type Dispatch, useEffect, useCallback } from "react"
import type {
  CollectionOrder,
  MainState,
  MainStateAction
} from "../../../useMainState/useMainState_types"
import { getGraphicalCollection } from "../../../useMainState/useMainState"
import type { UseCollectionSize } from "./useCollectionSize_types"
import { toRounded } from "../../../../auxiliary/toRounded"

function useCollectionSize(
  item: CollectionOrder,
  state: MainState,
  dispatch: Dispatch<MainStateAction>
): UseCollectionSize {
  const collection = getGraphicalCollection(item, state)
  const collectionWidth = collection == null ? 500 : collection.width
  const collectionHeight = collection == null ? 500 : collection.height
  const [width, setWidth] = useState(collectionWidth)
  const [height, setHeight] = useState(collectionHeight)
  const [isRatioLock, setIsRatioLock] = useState(false)

  // -------------------------------------------------------------
  // Called when the value on the numeric input is about to change
  const changeWidth = useCallback(
    (newWidth: number): void => {
      const newCollectionWidth = toRounded(
        newWidth,
        import.meta.env.VITE_ROUNDED_DECIMALS
      )
      dispatch({
        type: "graphic@width",
        payload: {
          ...item,
          width: newCollectionWidth
        }
      })
      setWidth(newCollectionWidth)

      if (isRatioLock) {
        const ratio = collectionHeight / collectionWidth
        const newCollectionHeight = toRounded(
          newCollectionWidth * ratio,
          import.meta.env.VITE_ROUNDED_DECIMALS
        )
        dispatch({
          type: "graphic@height",
          payload: {
            ...item,
            height: newCollectionHeight
          }
        })
        setHeight(newCollectionHeight)
      }
    },
    [dispatch, item, isRatioLock, collectionWidth, collectionHeight]
  )

  const changeHeight = useCallback(
    (newHeight: number): void => {
      const newCollectionHeight = toRounded(
        newHeight,
        import.meta.env.VITE_ROUNDED_DECIMALS
      )
      dispatch({
        type: "graphic@height",
        payload: {
          ...item,
          height: newCollectionHeight
        }
      })
      setHeight(newCollectionHeight)

      if (isRatioLock) {
        const ratio = collectionWidth / collectionHeight
        const newCollectionWidth = toRounded(
          newHeight * ratio,
          import.meta.env.VITE_ROUNDED_DECIMALS
        )

        dispatch({
          type: "graphic@width",
          payload: {
            ...item,
            width: newCollectionWidth
          }
        })
        setWidth(newCollectionWidth)
      }
    },
    [dispatch, item, collectionHeight, collectionWidth, isRatioLock]
  )

  // --------------------------------------------------------------
  // - Called when the size change from outside the numeric input -

  useEffect(() => {
    changeWidth(collectionWidth)
  }, [collectionWidth, changeWidth])

  useEffect(() => {
    changeHeight(collectionHeight)
  }, [collectionHeight, changeHeight])

  // -------------------------------------------------------------
  // -------------------------------------------------------------

  useEffect(() => {
    dispatch({
      type: "graphic@lockRatio",
      payload: {
        ...item,
        lockRatio: isRatioLock
      }
    })
  }, [isRatioLock, dispatch, item])

  // -------------------------------------------------------------

  return {
    width,
    height,
    isRatioLock,
    changeHeight,
    changeWidth,
    changeRatioLock: setIsRatioLock
  }
}

export default useCollectionSize
