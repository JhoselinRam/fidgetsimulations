import { forwardRef, useImperativeHandle, useRef } from "react"
import type {
  WindowElementProps,
  WindowElementRef
} from "./WindowElement_types"
import useWindowMovement from "../../hooks/useWindowMovement/useWindowMovement"
import ResizeKnobs from "./resources/ResizeKnobs/ResizeKnobs"
import MoveLayer from "./resources/MoveLayer/MoveLayer"

const WindowElement = forwardRef<WindowElementRef, WindowElementProps>(
  ({ children, mainAreaElement }, ref): JSX.Element => {
    const windowElement = useRef<HTMLDivElement>(null)
    const {
      movementEnable,
      knobResizeCallback,
      windowResize,
      onWindowMove,
      onWindowResize,
      windowMove,
      setMovementEnable,
      moveLayerCallback
    } = useWindowMovement(windowElement, mainAreaElement)

    useImperativeHandle(ref, () => {
      return {
        onWindowMove,
        onWindowResize,
        windowMove,
        windowResize,
        setMovementEnable
      }
    })

    return (
      <div
        className={`w-fit absolute ${
          movementEnable
            ? "outline-dashed outline-offset-8 outline-2 outline-tuatara-400"
            : ""
        }`}
        ref={windowElement}
      >
        {children}
        {movementEnable && (
          <>
            <ResizeKnobs knobResizeCallback={knobResizeCallback} />
            <MoveLayer moveLayerCallback={moveLayerCallback} />
          </>
        )}
      </div>
    )
  }
)

WindowElement.displayName = "WindowElement"

export default WindowElement
