import {
  useCallback,
  useContext,
  useEffect,
  useRef,
  type RefObject
} from "react"
import { mainStateContext } from "../useMainState/useMainState"

function useSimulation(graphElement: RefObject<HTMLDivElement>): void {
  const { mainState } = useContext(mainStateContext)
  const runFollower = useRef(false)
  const innerState = useRef({ ...mainState })

  const draw = useCallback((): void => {
    if (!runFollower.current) return

    console.log("Simulating")
    window.requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    runFollower.current = mainState.simulation.run

    if (!mainState.simulation.run) return

    innerState.current = { ...mainState }
    draw()
  }, [mainState.simulation.run, mainState, draw])
}

export default useSimulation
