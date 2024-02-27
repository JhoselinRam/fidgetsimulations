import { useState, type RefObject, useEffect, useContext } from "react"
import type { UseWindowMovement } from "./useWindowMovement_types"
import useWindowResize from "./resources/useWindowResize/useWindowResize"
import useWindowMove from "./resources/useWindowMove/useWIndowMove"
import type { GraphicElementType } from "../useMainState/resources/GraphicElement/GraphicElement_types"
import { mainStateContext } from "../useMainState/useMainState"

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

  useEffect(() => {
    if (element.current == null) return
    if (!(type in mainState)) return

    const index = mainState[type].findIndex((element) => element.id === id)
    if (index === -1) return

    element.current.style.left = `${mainState[type][index].positionX}px`
    element.current.style.top = `${mainState[type][index].positionY}px`
    element.current.style.width = `${mainState[type][index].width}px`
    element.current.style.height = `${mainState[type][index].height}px`
  }, [mainState, element, type, id])

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
