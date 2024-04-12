import { useContext } from "react"
import type { UseDeleteBall } from "./useDeleteBall_types"
import { mainStateContext } from "../useMainState/useMainState"

function useDeleteBall(ballId: string): UseDeleteBall {
  const { dispatch } = useContext(mainStateContext)

  function onDelete(): void {
    dispatch({ type: "balls@delete", payload: { id: ballId } })
  }

  return {
    onDelete
  }
}

export default useDeleteBall
