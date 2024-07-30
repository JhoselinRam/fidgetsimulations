import { useRef } from "react"
import type {
  AnimatedListElementProps,
  AnimatedListInitialPosition
} from "./AnimatedListElement_types"
import useAnimatedListElement from "../../hooks/useAnimatedListElement/useAnimatedListElement"

function AnimatedListElement({
  shouldExit,
  children,
  enterDirection = "top",
  exitDirection = "top",
  onExit,
  className,
  containerClassName
}: AnimatedListElementProps): JSX.Element {
  const element = useRef<HTMLDivElement>(null)
  const initialPosition: AnimatedListInitialPosition = {
    left: "-translate-x-full",
    right: "translate-x-full",
    top: "-translate-y-full",
    bottom: "translate-y-full"
  }
  useAnimatedListElement(element, shouldExit, exitDirection, onExit)

  return (
    <div className={`overflow-hidden ${containerClassName}`}>
      <div
        className={`transition-transform ${initialPosition[enterDirection]} ${className}`}
        ref={element}
      >
        {children}
      </div>
    </div>
  )
}

export default AnimatedListElement
