import { useCallback, useEffect, useRef, type RefObject } from "react"

function useWaitIcon(element: RefObject<SVGSVGElement>): void {
  const shouldSpin = useRef(true)
  const angle = useRef(0)
  const lastTime = useRef(0)
  const delay = 20
  const angleStep = 10

  const spin = useCallback(
    (time: number): void => {
      if (element.current != null && time - lastTime.current > delay) {
        angle.current -= angleStep
        element.current.style.transform = `rotate(${angle.current}deg)`

        lastTime.current = time
      }

      if (shouldSpin.current) window.requestAnimationFrame(spin)
    },
    [element]
  )

  useEffect(() => {
    shouldSpin.current = true
    window.requestAnimationFrame(spin)

    return () => {
      shouldSpin.current = false
    }
  }, [spin])
}

export default useWaitIcon
