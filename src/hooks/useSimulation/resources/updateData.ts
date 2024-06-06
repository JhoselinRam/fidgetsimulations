import type { Line_Chart } from "scigrapher/lib/es5/Data/LineChart/LineChart_Types"
import type { MainState } from "../../useMainState/useMainState_types"

export function updateData(linechart: Line_Chart, state: MainState): void {
  const ballPositionX = state.balls[0].data.map((ball) => ball.positionX)
  const ballPositionY = state.balls[0].data.map((ball) => ball.positionY)

  linechart.dataX(ballPositionX).dataY(ballPositionY)
}
