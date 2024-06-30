import type { Line_Chart } from "scigrapher/lib/es5/Data/LineChart/LineChart_Types"
import type { MainState } from "../../useMainState/useMainState_types"
import type { Vector_Field } from "scigrapher/lib/es5/Data/VectorField/Vector_Field_Types"
import {
  getVectorColor,
  getVectorMaxLength,
  getVectorOpacity
} from "../../../auxiliary/simulationUpdate"
import type { TrajectoryGraph } from "../useSimulation_types"

export function updateData(
  ballGraph: Line_Chart,
  velocityGraph: Vector_Field | null,
  accelerationGraph: Vector_Field | null,
  trajectoryGraph: TrajectoryGraph[],
  state: MainState
): void {
  const ballPositionX = state.balls[0].data.map((ball) => ball.positionX)
  const ballPositionY = state.balls[0].data.map((ball) => ball.positionY)

  ballGraph.dataX(ballPositionX).dataY(ballPositionY)

  if (velocityGraph != null) {
    const ballVelocityX = state.balls[0].data.map((ball) => ball.velocityX)
    const ballVelocityY = state.balls[0].data.map((ball) => ball.velocityY)
    velocityGraph
      .meshX([ballPositionX])
      .meshY([ballPositionY])
      .dataX([ballVelocityX])
      .dataY([ballVelocityY])
      .color(getVectorColor(state.velocityVector))
      .opacity(getVectorOpacity(state.velocityVector))
      .normalize(state.velocityVector.normalize)
      .maxLength(
        getVectorMaxLength(state.velocityVector, ballVelocityX, ballVelocityY)
      )
  }

  if (accelerationGraph != null) {
    const ballAccelerationX = state.balls[0].data.map((ball) => ball.accelX)
    const ballAccelerationY = state.balls[0].data.map((ball) => ball.accelY)

    accelerationGraph
      .meshX([ballPositionX])
      .meshY([ballPositionY])
      .dataX([ballAccelerationX])
      .dataY([ballAccelerationY])
      .color(getVectorColor(state.accelerationVector))
      .opacity(getVectorOpacity(state.accelerationVector))
      .normalize(state.accelerationVector.normalize)
      .maxLength(
        getVectorMaxLength(
          state.accelerationVector,
          ballAccelerationX,
          ballAccelerationY
        )
      )
  }

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
