import { useContext } from "react"
import type { BallDynamicsHooks } from "../../useBallDynamics_types"
import { mainStateContext } from "../../../useMainState/useMainState"

function useBallPosition(axis: "x" | "y"): BallDynamicsHooks {
  const { dispatch, mainState } = useContext(mainStateContext)
	const 
}

export default useBallPosition
