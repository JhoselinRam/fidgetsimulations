import { useRef } from "react"
import type { WindowElementProps } from "./WindowElement_types"
import useWindowMovement from "../../hooks/useWindowMovement/useWindowMovement"
import ResizeKnobs from "./resources/ResizeKnobs/ResizeKnobs"

function WindowElement({ children }: WindowElementProps): JSX.Element {
  const windowElement = useRef<HTMLDivElement | null>(null)
  const { movementEnable } = useWindowMovement(windowElement)

  return (
    <div
      className={`w-fit relative ${
        movementEnable
          ? "outline-dashed outline-offset-8 outline-2 outline-tuatara-400"
          : ""
      }`}
      ref={windowElement}
    >
      {children}
      {movementEnable && <ResizeKnobs />}
    </div>
  )
}

export default WindowElement
