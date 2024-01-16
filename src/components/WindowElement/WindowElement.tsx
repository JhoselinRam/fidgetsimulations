import { forwardRef, useImperativeHandle, useRef } from "react"
import type {
  WindowElementProps,
  WindowElementRef
} from "./WindowElement_types"
import useWindowMovement from "../../hooks/useWindowMovement/useWindowMovement"
import ResizeKnobs from "./resources/ResizeKnobs/ResizeKnobs"
import MoveLayer from "./resources/MoveLayer/MoveLayer"

// --------------------------------------------------------
// --------------------------------------------------------

const WindowElement = forwardRef<WindowElementRef, WindowElementProps>(
  ({ children, mainAreaElement, id, type }, ref): JSX.Element => {
    const windowElement = useRef<HTMLDivElement>(null)
    const windowMovement = useWindowMovement(
      windowElement,
      mainAreaElement,
      id,
      type
    )

    useImperativeHandle(ref, () => windowMovement)

    return (
      <div
        className={`w-fit absolute ${
          windowMovement.movementEnable
            ? "outline-dashed outline-offset-8 outline-2 outline-tuatara-400"
            : ""
        }`}
        ref={windowElement}
      >
        {children}
        {windowMovement.movementEnable && (
          <>
            <ResizeKnobs
              knobResizeCallback={windowMovement.knobResizeCallback}
            />
            <MoveLayer moveLayerCallback={windowMovement.moveLayerCallback} />
          </>
        )}
      </div>
    )
  }
)

WindowElement.displayName = "WindowElement"

export default WindowElement
