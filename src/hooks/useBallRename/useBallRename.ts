import type { UseBallRename } from "./useBallRename_types"
import type { MainState } from "../useMainState/useMainState_types"
import useBindBallState from "../useBindBallState/useBindBallState"

function useBallRename(ballId: string): UseBallRename {
  const ballProps = useBindBallState(ballId, getBallName, "balls@name")

  return {
    value: ballProps.value,
    onChange: ballProps.changeValue
  }
}

export default useBallRename

function getBallName(ballId: string, state: MainState): string {
  const data = state.balls[0].data.find((ball) => ball.id === ballId)

  if (data == null) return ""

  return data.name
}
