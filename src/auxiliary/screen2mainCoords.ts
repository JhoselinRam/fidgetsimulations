import { type RefObject } from "react"
import type { WindowCoords } from "../hooks/useWindowMovement/resources/useWindowMove/useWindowMove_types"

export function screen2mainCoords(
  { x, y }: WindowCoords,
  reference: RefObject<HTMLDivElement>
): WindowCoords {
  if (reference.current == null) return { x: 0, y: 0 }
  const parentRect = reference.current.getClientRects()[0]

  return {
    x: x - parentRect.x,
    y: y - parentRect.y
  }
}
