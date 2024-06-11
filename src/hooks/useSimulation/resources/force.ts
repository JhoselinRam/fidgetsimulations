import type { DampingState } from "../../useMainState/resources/Damping/Damping_types"
import type { DragState } from "../../useMainState/resources/Drag/Drag_types"
import type { ElectricState } from "../../useMainState/resources/Electric/Electric_types"
import type { GravityState } from "../../useMainState/resources/Gravity/Gravity_types"
import type { LocalGravityState } from "../../useMainState/resources/LocalGravity/LocalGravity_types"
import type { MainState } from "../../useMainState/useMainState_types"
import type {
  BallProperty,
  ForceSelector,
  ForceTypes
} from "../useSimulation_types"

export function computeForce(state: MainState): void {
  state.balls[0].data.forEach((ball, index) => {
    const localGravityForce = totalForceType("localGravity", state, index)
    const dragForce = totalForceType("drag", state, index)
    const gravitationalForce = totalForceType("gravity", state, index)
    const electricForce = totalForceType("electric", state, index)

    const accelerationX =
      (localGravityForce.x +
        dragForce.x +
        gravitationalForce.x +
        electricForce.x) /
      ball.mass
    const accelerationY =
      (localGravityForce.y +
        dragForce.y +
        gravitationalForce.y +
        electricForce.y) /
      ball.mass

    state.balls[0].data[index].accelX = accelerationX
    state.balls[0].data[index].accelY = accelerationY
  })
}

// --------------------------------------------------------
// --------------------------------------------------------
const forceSelector: ForceSelector = {
  localGravity: computeLocalGravity,
  drag: computeDrag,
  electric: computeElectric,
  gravity: computeGravity,
  damping: computeDamping
}

function totalForceType(
  forceType: ForceTypes,
  state: MainState,
  index: number
): BallProperty {
  return state[forceType]
    .map((force) =>
      forceSelector[forceType](
        index,
        state,
        force as LocalGravityState &
          GravityState &
          DragState &
          ElectricState &
          DampingState
      )
    )
    .reduce(
      (prev, current) => ({ x: prev.x + current.x, y: prev.y + current.y }),
      { x: 0, y: 0 }
    )
}

// --------------------------------------------------------
// ----------------- Local gravity ------------------------

function computeLocalGravity(
  index: number,
  state: MainState,
  force: LocalGravityState
): BallProperty {
  const ball = state.balls[0].data[index]
  return {
    x: ball.mass * force.magnitudeX,
    y: ball.mass * force.magnitudeY
  }
}

// --------------------------------------------------------
// ----------------------- Drag ---------------------------

function computeDrag(
  index: number,
  state: MainState,
  force: DragState
): BallProperty {
  const ball = state.balls[0].data[index]
  const velMagnitude = Math.hypot(ball.velocityX, ball.velocityY)
  const area = Math.PI * ball.radius ** 2
  const coefficient = force.magnitude * force.density * velMagnitude * area

  return {
    x: -coefficient * ball.velocityX,
    y: -coefficient * ball.velocityY
  }
}

// --------------------------------------------------------
// -------------------- Damping ---------------------------

function computeDamping(
  index: number,
  state: MainState,
  force: DampingState
): BallProperty {
  const ball = state.balls[0].data[index]

  return {
    x: -force.magnitude * ball.velocityX,
    y: -force.magnitude * ball.velocityY
  }
}

// --------------------------------------------------------
// --------------------- Gravity --------------------------

function computeGravity(
  index: number,
  state: MainState,
  force: GravityState
): BallProperty {
  const ballA = state.balls[0].data[index]

  const gravityForce: BallProperty = { x: 0, y: 0 }

  state.balls[0].data.forEach((ballB) => {
    if (ballA.id === ballB.id) return

    const r = [
      ballA.positionX - ballB.positionX,
      ballA.positionY - ballB.positionY
    ]
    const rMagnitude = Math.hypot(...r)
    const forceMagnitude =
      (-force.magnitude * (ballA.mass * ballB.mass)) / rMagnitude ** 3

    gravityForce.x += forceMagnitude * r[0]
    gravityForce.y += forceMagnitude * r[1]
  })

  return gravityForce
}

// --------------------------------------------------------
// --------------------- Electric --------------------------

function computeElectric(
  index: number,
  state: MainState,
  force: ElectricState
): BallProperty {
  const ballA = state.balls[0].data[index]

  const electricForce: BallProperty = { x: 0, y: 0 }

  state.balls[0].data.forEach((ballB) => {
    if (ballA.id === ballB.id) return

    const r = [
      ballA.positionX - ballB.positionX,
      ballA.positionY - ballB.positionY
    ]
    const rMagnitude = Math.hypot(...r)
    const forceMagnitude =
      (force.magnitude * (ballA.charge * ballB.charge)) / rMagnitude ** 3

    electricForce.x += forceMagnitude * r[0]
    electricForce.y += forceMagnitude * r[1]
  })

  return electricForce
}

// --------------------------------------------------------
