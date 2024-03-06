import { useState, type RefObject, useEffect, useContext } from "react"
import type {
  MovementCollectionProperties,
  UseWindowMovement
} from "./useWindowMovement_types"
import useWindowResize from "./resources/useWindowResize/useWindowResize"
import useWindowMove from "./resources/useWindowMove/useWIndowMove"
import type { GraphicElementType } from "../useMainState/resources/GraphicElement/GraphicElement_types"
import {
  getGraphicalCollection,
  mainStateContext
} from "../useMainState/useMainState"

function useWindowMovement(
  element: RefObject<HTMLDivElement>,
  parent: RefObject<HTMLDivElement>,
  id: string,
  type: GraphicElementType
): UseWindowMovement {
  const { mainState } = useContext(mainStateContext)
  const [movementEnable, setMovementEnable] = useState(false)
  const { moveLayerCallback, onWindowMove, windowMove } = useWindowMove(
    element,
    parent,
    id,
    type
  )
  const { knobResizeCallback, onWindowResize, windowResize } = useWindowResize(
    element,
    parent,
    id,
    type,
    windowMove
  )
  const { height, manualEdit, positionX, positionY, width } =
    getCollectionProperties()

  useEffect(() => {
    if (element.current == null) return

    element.current.style.left = `${positionX}px`
    element.current.style.top = `${positionY}px`
    element.current.style.width = `${width}px`
    element.current.style.height = `${height}px`
  }, [element, positionX, positionY, width, height])

  useEffect(() => {
    if (manualEdit === movementEnable) return

    setMovementEnable(manualEdit)
  }, [movementEnable, manualEdit])

  function getCollectionProperties(): MovementCollectionProperties {
    const collection = getGraphicalCollection({ id, type }, mainState)

    if (collection == null)
      return {
        positionX: 0,
        positionY: 0,
        width: 500,
        height: 500,
        lockRatio: false,
        manualEdit: false
      }

    return {
      positionX: collection.positionX,
      positionY: collection.positionY,
      width: collection.width,
      height: collection.height,
      lockRatio: collection.lockRatio,
      manualEdit: collection.manualEdit
    }
  }

  return {
    movementEnable,
    setMovementEnable,
    knobResizeCallback,
    windowMove,
    windowResize,
    onWindowMove,
    onWindowResize,
    moveLayerCallback
  }
}

export default useWindowMovement
