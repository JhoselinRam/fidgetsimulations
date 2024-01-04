import type { ResizeKnobPosition } from "../../WindowElement_types"
import ResizeKnob from "../ResizeKnob/ResizeKnob"
import type { ResizeKnobsProps } from "./ResizeKnobs_types"

function ResizeKnobs({ knobResizeCallback }: ResizeKnobsProps): JSX.Element {
  const positions: ResizeKnobPosition[] = [
    "top-left",
    "top",
    "top-right",
    "left",
    "right",
    "bottom-left",
    "bottom",
    "bottom-right"
  ]
  return (
    <>
      {positions.map((position) => (
        <ResizeKnob
          position={position}
          key={position}
          resizeCallback={knobResizeCallback[position]}
        />
      ))}
    </>
  )
}

export default ResizeKnobs
