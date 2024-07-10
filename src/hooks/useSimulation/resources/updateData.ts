import type { Line_Chart } from "scigrapher/lib/es5/Data/LineChart/LineChart_Types"
import type { MainState } from "../../useMainState/useMainState_types"
import {
  type VectorGraph,
  getVectorColor,
  getVectorMaxLength,
  getVectorOpacity
} from "../../../auxiliary/simulationUpdate"
import type { TrajectoryGraph } from "../useSimulation_types"

export function updateData(
  ballGraph: Line_Chart,
  vectorGraph: VectorGraph[],
  trajectoryGraph: TrajectoryGraph[],
  state: MainState
): void {
  const ballPositionX = state.balls[0].data.map((ball) => ball.positionX)
  const ballPositionY = state.balls[0].data.map((ball) => ball.positionY)

  ballGraph.dataX(ballPositionX).dataY(ballPositionY)

  vectorGraph.forEach((element) => {
    updateVector(element, state, ballPositionX, ballPositionY)
  })

  trajectoryGraph.forEach((element) => {
    updateTrajectory(element, state)
  })
}

function updateTrajectory(trajectory: TrajectoryGraph, state: MainState): void {
  const ball = state.balls[0].data.find((ball) => ball.id === trajectory.id)
  if (ball == null) return

  let dataX = trajectory.graph.dataX()
  let dataY = trajectory.graph.dataY()

  dataX.push(ball.positionX)
  dataY.push(ball.positionY)
  if (dataX.length > ball.trajectoryLength) {
    dataX = dataX.slice(1)
    dataY = dataY.slice(1)
  }

  trajectory.graph
    .dataX(dataX)
    .dataY(dataY)
    .lineColor(ball.trajectoryMatchColor ? ball.color : ball.trajectoryColor)
    .lineOpacity(
      ball.trajectoryFade
        ? dataX.map(
            (_, index) =>
              (ball.trajectoryOpacity *
                (ball.trajectoryLength - dataX.length + index)) /
              (ball.trajectoryLength - 1)
          )
        : ball.trajectoryOpacity
    )
    .lineWidth(2)
}

function updateVector(
  vector: VectorGraph,
  state: MainState,
  positionX: number[],
  positionY: number[]
): void {
  const vectorState = state[vector.type].find((data) => data.id === vector.id)
  if (vectorState == null) return

  const dataX =
    vector.type === "velocityVector"
      ? state.balls[0].data.map((ball) => ball.velocityX)
      : state.balls[0].data.map((ball) => ball.accelX)
  const dataY =
    vector.type === "velocityVector"
      ? state.balls[0].data.map((ball) => ball.velocityY)
      : state.balls[0].data.map((ball) => ball.accelY)

  vector.field
    .meshX([positionX])
    .meshY([positionY])
    .dataX([dataX])
    .dataY([dataY])
    .color(getVectorColor(vectorState))
    .opacity(getVectorOpacity(vectorState))
    .normalize(vectorState.normalize)
    .maxLength(getVectorMaxLength(vectorState, dataX, dataY))
}
