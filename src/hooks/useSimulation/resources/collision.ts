import type { BallData } from "../../useMainState/resources/Balls/Balls_types"
import type { MainState } from "../../useMainState/useMainState_types"
import { ballCollision } from "./ballCollision"
import {
  ellipticalCollision,
  ellipticalObstacleCollision
} from "./ellipticalObject"
import {
  rectangularCollision,
  rectangularObstacleCollision
} from "./rectangularObject"

// --------------------------------------------------------

export function computeCollision(state: MainState): void {
  const ballNumber = state.balls[0].data.length

  for (let i = 0; i < ballNumber; i++) {
    const ball = state.balls[0].data[i]

    if (state.balls[0].collision) ballCollision(i, state, ballNumber)
    containerCollision(ball, state)
    obstacleCollision(ball, state)
  }
}

// --------------- Container Collision --------------------

function containerCollision(ball: BallData, state: MainState): void {
  const dt = state.time.dt / 1000

  state.container.forEach((container) => {
    if (container.shape === "rectangle")
      rectangularCollision(ball, container, dt)

    if (container.shape === "ellipse") ellipticalCollision(ball, container, dt)
  })
}

// --------------------------------------------------------
// ---------------- Obstacle Collision --------------------

function obstacleCollision(ball: BallData, state: MainState): void {
  const dt = state.time.dt / 1000

  state.obstacle.forEach((obstacle) => {
    if (obstacle.shape === "rectangle")
      rectangularObstacleCollision(ball, obstacle, dt)

    if (obstacle.shape === "ellipse")
      ellipticalObstacleCollision(ball, obstacle, dt)
  })
}

// --------------------------------------------------------
