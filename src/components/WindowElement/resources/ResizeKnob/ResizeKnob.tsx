import type { PointerEvent } from "react"
import type { ResizeKnobClass } from "../../WindowElement_types"
import type { ResizeKnobProps } from "./ResizeKnob_types"

function ResizeKnob({
  position,
  resizeCallback
}: ResizeKnobProps): JSX.Element {
  const className: ResizeKnobClass = {
    "top-left":
      "top-0 left-0 translate-x-[calc(-50%-8px)] translate-y-[calc(-50%-8px)] after:hover:cursor-nwse-resize",
    top: "top-0 left-1/2 -translate-x-1/2 translate-y-[calc(-50%-8px)] after:hover:cursor-ns-resize",
    "top-right":
      "top-0 right-0 translate-x-[calc(50%+8px)] translate-y-[calc(-50%-8px)] after:hover:cursor-nesw-resize",
    left: "top-1/2 left-0 translate-x-[calc(-50%-8px)] -translate-y-1/2 after:hover:cursor-ew-resize",
    right:
      "top-1/2 right-0 translate-x-[calc(50%+8px)] -translate-y-1/2 after:hover:cursor-ew-resize",
    "bottom-left":
      "bottom-0 left-0 translate-x-[calc(-50%-8px)] translate-y-[calc(50%+8px)] after:hover:cursor-nesw-resize",
    bottom:
      "bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(50%+8px)] after:hover:cursor-ns-resize",
    "bottom-right":
      "bottom-0 right-0 translate-x-[calc(50%+8px)] translate-y-[calc(50%+8px)] after:hover:cursor-nwse-resize"
  }

  function handleClick(e: PointerEvent): void {
    resizeCallback(e, position)
  }

  return (
    <div
      className={`w-3 h-3 absolute bg-tuatara-700 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-6 after:h-6 
      ${className[position]}`}
      onPointerDown={handleClick}
    ></div>
  )
}

export default ResizeKnob
