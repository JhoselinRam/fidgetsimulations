import { type Dispatch, useEffect, useState } from "react"
import type {
  MainState,
  MainStateAction
} from "../../../useMainState/useMainState_types"
import type { UseBallRename } from "./useBallRename_types"

function useBallRename(
  id: string,
  state: MainState,
  dispatch: Dispatch<MainStateAction>
): UseBallRename {
  const ballName = getBallName(id, state)
  const [inputName, setInputName] = useState(ballName)

  function changeInputName(value: string): void {
    dispatch({
      type: "balls@name",
      payload: { id, name: value }
    })
    setInputName(value)
  }

  useEffect(() => {
    setInputName(ballName)
  }, [ballName])

  return {
    value: inputName,
    onChange: changeInputName
  }
}

export default useBallRename

function getBallName(id: string, state: MainState): string {
  const ballState = state.balls[0].data.find((ball) => ball.id === id)

  if (ballState == null) return ""

  return ballState.name
}
