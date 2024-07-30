import { useEffect, type RefObject } from "react"
import type {
  AnimatedListDirection,
  AnimatedListInitialPosition
} from "../../components/AnimatedListElement/AnimatedListElement_types"

function useAnimatedListElement(
  element: RefObject<HTMLDivElement>,
  shouldExit: boolean,
  exitDirection: AnimatedListDirection,
  onExit?: () => void
): void {
  useEffect(() => {
    setTimeout(() => {
      if (element.current == null) return
      element.current.style.transform = "translate(0,0)"
    }, 5)
  }, [element])

  useEffect(() => {
    if (element.current == null) return
    if (!shouldExit) return
    const finalPosition: AnimatedListInitialPosition = {
      left: "translate(-100%,0)",
      right: "translate(100%,0)",
      top: "translate(0,-100%)",
      bottom: "translate(0,100%)"
    }

    element.current.style.transform = finalPosition[exitDirection]

    setTimeout(() => {
      if (onExit != null) onExit()
    }, 275)
  }, [shouldExit, element, exitDirection, onExit])
}

export default useAnimatedListElement
