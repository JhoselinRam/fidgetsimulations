import { type RefObject, useEffect, useState } from "react"

function useRotation(
  element: RefObject<HTMLButtonElement>,
  svg: RefObject<SVGSVGElement>
): void {
  const [angle, setAngle] = useState(0)

  // On first render
  useEffect(() => {
    // Guard
    if (element.current == null) return

    const buttonElement = element.current
    const step = Math.PI / 16

    // Event handlers
    const handlePointerEnter = (): void => {
      setAngle((prev) => prev + step)
    }
    const handlePointerLeave = (): void => {
      setAngle((prev) => prev - step)
    }
    const handleClick = (): void => {
      setAngle((prev) => prev + step)
      buttonElement.removeEventListener("pointerleave", handlePointerLeave)
      buttonElement.addEventListener("pointerleave", cleanupPointerLeave)
    }

    const cleanupPointerLeave = (): void => {
      buttonElement.removeEventListener("pointerleave", cleanupPointerLeave)
      buttonElement.addEventListener("pointerleave", handlePointerLeave)
    }

    // Add the handlers to their respective events
    buttonElement.addEventListener("pointerenter", handlePointerEnter)
    buttonElement.addEventListener("pointerleave", handlePointerLeave)
    buttonElement.addEventListener("click", handleClick)
    buttonElement.removeEventListener("pointerleave", cleanupPointerLeave)

    // Cleanup function
    return (): void => {
      buttonElement.removeEventListener("pointerenter", handlePointerEnter)
      buttonElement.removeEventListener("pointerleave", handlePointerLeave)
      buttonElement.removeEventListener("click", handleClick)
    }
  }, [setAngle, element])

  // Rotate the element
  useEffect(() => {
    if (svg.current == null) return
    svg.current.style.transform = `rotate(${angle}rad)`
  }, [angle, svg])
}

export default useRotation
