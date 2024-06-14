import { toRadians } from "../../../auxiliary/angleAux"
import { isBetween } from "../../../auxiliary/isBetween"
import { dot, rotate, translate } from "../../../auxiliary/vector"
import type { ContainerState } from "../../useMainState/resources/Container/Container_types"
import type { MainState } from "../../useMainState/useMainState_types"
import { rectangularCollision } from "./rectangularObject"

// --------------------------------------------------------

export function computeCollision(state: MainState): void {
  computeBallCollision(state)
  containerCollision(state)
}

// --------------------------------------------------------
// ------------------ Ball Collision ----------------------

function computeBallCollision(state: MainState): void {
  if (!state.balls[0].collision) return

  const ballNumber = state.balls[0].data.length

  for (let i = 0; i < ballNumber - 1; i++) {
    for (let j = i + 1; j < ballNumber; j++) {
      const ballA = state.balls[0].data[i]
      const ballB = state.balls[0].data[j]
      const minDistance = ballA.radius + ballB.radius
      const distanceVector = [
        ballB.positionX - ballA.positionX,
        ballB.positionY - ballA.positionY
      ]
      const distance = Math.hypot(...distanceVector)

      // If there is no collision, compare the next pair
      if (distance > minDistance) continue
      const dt = state.time.dt / 1000

      // Record the positions and velocities at the moment of impact
      const positionA = [ballA.positionX, ballA.positionY]
      const positionB = [ballB.positionX, ballB.positionY]
      const velocityA = [ballA.velocityX, ballA.velocityY]
      const velocityB = [ballB.velocityX, ballB.velocityY]

      // Correct the positions so the balls don´t pass through one another
      const displacement = (minDistance - distance) / 2
      const displacementVector = [
        (distanceVector[0] / distance) * displacement,
        (distanceVector[1] / distance) * displacement
      ]

      positionA[0] -= displacementVector[0]
      positionA[1] -= displacementVector[1]
      positionB[0] += displacementVector[0]
      positionB[1] += displacementVector[1]

      // Correct the velocities to reflect the collision
      const velocityDiffA = [
        velocityA[0] - velocityB[0],
        velocityA[1] - velocityB[1]
      ]
      const positionDiffA = [
        positionA[0] - positionB[0],
        positionA[1] - positionB[1]
      ]
      const compoundMassA = (2 * ballB.mass) / (ballA.mass + ballB.mass)
      const coefficientA =
        (compoundMassA * dot(velocityDiffA, positionDiffA)) /
        Math.hypot(...positionDiffA) ** 2

      const velocityDiffB = [
        velocityB[0] - velocityA[0],
        velocityB[1] - velocityA[1]
      ]
      const positionDiffB = [
        positionB[0] - positionA[0],
        positionB[1] - positionA[1]
      ]
      const compoundMassB = (2 * ballA.mass) / (ballA.mass + ballB.mass)
      const coefficientB =
        (compoundMassB * dot(velocityDiffB, positionDiffB)) /
        Math.hypot(...positionDiffB) ** 2

      velocityA[0] -= coefficientA * positionDiffA[0]
      velocityA[1] -= coefficientA * positionDiffA[1]
      velocityB[0] -= coefficientB * positionDiffB[0]
      velocityB[1] -= coefficientB * positionDiffB[1]

      // Update the balls properties in the state
      ballA.positionX = positionA[0]
      ballA.positionY = positionA[1]
      ballA.velocityX = velocityA[0]
      ballA.velocityY = velocityA[1]
      ballA.lastPositionX = positionA[0] - velocityA[0] * dt
      ballA.lastPositionY = positionA[1] - velocityA[1] * dt

      ballB.positionX = positionB[0]
      ballB.positionY = positionB[1]
      ballB.velocityX = velocityB[0]
      ballB.velocityY = velocityB[1]
      ballB.lastPositionX = positionB[0] - velocityB[0] * dt
      ballB.lastPositionY = positionB[1] - velocityB[1] * dt
    }
  }
}

// --------------------------------------------------------
// --------------- Container Collision --------------------

function containerCollision(state: MainState): void {
  state.container.forEach((container) => {
    if (container.shape === "rectangle")
      rectangularContainerCollision(container, state)

    if (container.shape === "ellipse")
      ellipticalContainerCollision(container, state)
  })
}

// --------------------------------------------------------
// -------------- Rectangular Container -------------------

function rectangularContainerCollision(
  container: ContainerState,
  state: MainState
): void {
  const dt = state.time.dt / 1000

  state.balls[0].data.forEach((ball) => {
    rectangularCollision(ball, container, dt)
    // // Record the relevant properties
    // let position = [ball.positionX, ball.positionY]
    // let lastPosition = [ball.lastPositionX, ball.lastPositionY]
    // const radius = ball.radius
    // const angle = toRadians(container.angle)
    // let containerTL = [container.positionX, container.positionY]
    // let containerBR = [
    //   container.positionX + container.width,
    //   container.positionY - container.height
    // ]

    // const containerCenter = [
    //   container.positionX + container.width / 2,
    //   container.positionY - container.height / 2
    // ]

    // // Move properties to container reference frame
    // const translation = [-containerCenter[0], -containerCenter[1]]
    // position = translate(position, translation)
    // lastPosition = translate(lastPosition, translation)
    // containerTL = translate(containerTL, translation)
    // containerBR = translate(containerBR, translation)

    // // Rotate properties to container reference frame
    // position = rotate(position, -angle)
    // lastPosition = rotate(lastPosition, -angle)

    // // Check for collision
    // if (position[0] - radius < containerTL[0]) {
    //   const diff = Math.abs(position[0] - lastPosition[0])
    //   position[0] = containerTL[0] + radius
    //   lastPosition[0] = position[0] - diff
    // }

    // if (position[0] + radius > containerBR[0]) {
    //   const diff = Math.abs(position[0] - lastPosition[0])
    //   position[0] = containerBR[0] - radius
    //   lastPosition[0] = position[0] + diff
    // }

    // if (position[1] + radius > containerTL[1]) {
    //   const diff = Math.abs(position[1] - lastPosition[1])
    //   position[1] = containerTL[1] - radius
    //   lastPosition[1] = position[1] + diff
    // }

    // if (position[1] - radius < containerBR[1]) {
    //   const diff = Math.abs(position[1] - lastPosition[1])
    //   position[1] = containerBR[1] + radius
    //   lastPosition[1] = position[1] - diff
    // }

    // // Return properties to the ball reference frame
    // position = rotate(position, angle)
    // lastPosition = rotate(lastPosition, angle)

    // position = translate(position, containerCenter)
    // lastPosition = translate(lastPosition, containerCenter)

    // // Update ball properties
    // ball.positionX = position[0]
    // ball.positionY = position[1]
    // ball.lastPositionX = lastPosition[0]
    // ball.lastPositionY = lastPosition[1]
    // ball.velocityX = (position[0] - lastPosition[0]) / dt
    // ball.velocityY = (position[1] - lastPosition[1]) / dt
  })
}

// --------------------------------------------------------
// --------------------------------------------------------

function ellipticalContainerCollision(
  container: ContainerState,
  state: MainState
): void {
  const dt = state.time.dt / 1000

  state.balls[0].data.forEach((ball) => {
    // Record the relevant properties
    let position = [ball.positionX, ball.positionY]
    let lastPosition = [ball.lastPositionX, ball.lastPositionY]
    const radius = ball.radius
    const angle = toRadians(container.angle)
    const a = container.width / 2 - radius
    const b = container.height / 2 - radius

    const containerCenter = [
      container.positionX + container.width / 2,
      container.positionY - container.height / 2
    ]
    // Move properties to container reference frame
    position = translate(position, [-containerCenter[0], -containerCenter[1]])
    lastPosition = translate(lastPosition, [
      -containerCenter[0],
      -containerCenter[1]
    ])

    // Rotate properties to container reference frame
    position = rotate(position, -angle)
    lastPosition = rotate(lastPosition, -angle)

    // Check if ball is outside the container
    if (a === 0 || b === 0) return
    const isInside = (position[0] / a) ** 2 + (position[1] / b) ** 2 < 1
    if (isInside) return

    // Compute the intersection point
    let tParameter = 0
    if (position[0] === 0) {
      tParameter = position[1] > 0 ? Math.PI / 2 : (3 * Math.PI) / 2
    } else {
      tParameter = Math.atan2(position[1] * a, position[0] * b)
    }

    const tangentX = -a * Math.sin(tParameter)
    const tangentY = b * Math.cos(tParameter)

    let tangentAngle = Math.PI / 2
    if (tangentX === 0) {
      if (tangentY < 0) tangentAngle *= -1
    } else {
      tangentAngle = Math.atan(tangentY / tangentX)
    }
    const ballAngle = Math.atan2(position[1], position[0])
    let intersection = [a * Math.cos(tParameter), b * Math.sin(tParameter)]

    // Rotate the properties to be aligned with the intersection point
    position = rotate(position, -ballAngle)
    lastPosition = rotate(lastPosition, -ballAngle)
    intersection = rotate(intersection, -ballAngle)
    if (isBetween(ballAngle, 0, Math.PI)) tangentAngle -= ballAngle
    if (isBetween(ballAngle, -Math.PI, 0)) tangentAngle -= ballAngle + Math.PI

    // Move the properties so the ball is in the center of the reference frame
    let relativePosition = translate(position, [-position[0], -position[1]])
    let relativeLastPosition = translate(lastPosition, [
      -position[0],
      -position[1]
    ])
    let relativeIntersection = translate(intersection, [
      -position[0],
      -position[1]
    ])
    const containerAngle = tangentAngle + Math.PI / 2

    // Rotate the properties so the collision is strictly horizontal
    relativePosition = rotate(relativePosition, -containerAngle)
    relativeLastPosition = rotate(relativeLastPosition, -containerAngle)
    relativeIntersection = rotate(relativeIntersection, -containerAngle)

    // Correct the properties from the right
    const diff = Math.abs(relativePosition[0] - relativeLastPosition[0])
    relativePosition[0] = -Math.hypot(...relativeIntersection)
    relativeLastPosition[0] = relativePosition[0] + diff

    // Return the properties to the ball reference frame
    relativePosition = rotate(relativePosition, containerAngle)
    relativeLastPosition = rotate(relativeLastPosition, containerAngle)

    position = translate(relativePosition, position)
    lastPosition = translate(relativeLastPosition, position)

    position = rotate(position, ballAngle)
    lastPosition = rotate(lastPosition, ballAngle)

    position = rotate(position, angle)
    lastPosition = rotate(lastPosition, angle)

    position = translate(position, [containerCenter[0], containerCenter[1]])
    lastPosition = translate(lastPosition, [
      containerCenter[0],
      containerCenter[1]
    ])

    // Update the ball properties
    ball.positionX = position[0]
    ball.positionY = position[1]
    ball.lastPositionX = lastPosition[0]
    ball.lastPositionY = lastPosition[1]
    ball.velocityX = (position[0] - lastPosition[0]) / dt
    ball.velocityY = (position[1] - lastPosition[1]) / dt
  })
}

// --------------------------------------------------------
// --------------------------------------------------------
