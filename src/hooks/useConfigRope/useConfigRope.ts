import { useContext } from "react"
import type { RopeState } from "../useMainState/resources/Rope/Rope_types"
import {
  ropeChargeDefaultState,
  ropeColorDefaultState,
  ropeMassDefaultState,
  ropePositionDefaultState,
  ropeRadiusDefaultState,
  ropeRecursionDefaultState,
  ropeShapeDefaultState,
  ropeVelocityDefaultState
} from "../useMainState/resources/Rope/defaultState"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type { RopeProps, UseConfigRope } from "./useConfigRope_types"
import useRopeProperties from "./resources/useRopeProperties/useRopeProperties"
import useRopeDynamics from "./resources/useRopeDynamics/useRopeDynamics"
import useRopeBallProperties from "./resources/useRopeBallProperties/useRopeBallProperties"
import { toRadians } from "../../auxiliary/angleAux"
import { createBallState } from "../useMainState/resources/Balls/defaultState"
import type { BallData } from "../useMainState/resources/Balls/Balls_types"
import { createRodState } from "../useMainState/resources/Rod/defaultState"

function useConfigRope(item: CollectionOrder): UseConfigRope {
  const { mainState, dispatch } = useContext(mainStateContext)
  const ropeProps = getRopeProps(item, mainState)

  const propertiesHooks = useRopeProperties(item, ropeProps)
  const dynamicsHooks = useRopeDynamics(item, ropeProps)
  const ballPropertiesHooks = useRopeBallProperties(item, ropeProps)

  function onCreate(): void {
    const {
      angle,
      charge,
      color,
      length,
      mass,
      nodes,
      positionX,
      positionY,
      radius,
      velocityX,
      velocityY,
      recursion
    } = getRopeProps(item, mainState)

    const xLength = length * Math.cos(toRadians(angle))
    const yLength = length * Math.sin(toRadians(angle))
    const xDiff = xLength / (nodes - 1)
    const yDiff = yLength / (nodes - 1)

    const ballMass = mass / nodes
    const ballCharge = charge / nodes

    const newBalls: BallData[] = []
    for (let i = 0; i < nodes; i++) {
      const ball = createBallState()

      ball.name = `Rope ball ${i + 1}`
      ball.positionX = positionX + xDiff * i
      ball.positionY = positionY + yDiff * i
      ball.velocityX = velocityX
      ball.velocityY = velocityY
      ball.radius = radius
      ball.color = color
      ball.mass = ballMass
      ball.charge = ballCharge

      newBalls.push(ball)
      dispatch({ type: "balls@new", payload: { ...ball } })
    }

    const newRod = createRodState()

    newRod.name = "Rope rod link"
    newRod.length = length / (nodes - 1)
    newRod.recursion = recursion
    newRod.linkBall = []
    for (let i = 1; i < nodes; i++) {
      newRod.linkBall.push([newBalls[i - 1].id, newBalls[i].id])
    }

    dispatch({ type: "rod@new", payload: { ...newRod } })
  }

  return {
    ballPropertiesHooks,
    dynamicsHooks,
    propertiesHooks,
    onCreate
  }
}

export default useConfigRope

function getRopeProps(item: CollectionOrder, state: MainState): RopeProps {
  const collection = getCollection<RopeState>(item, state, "rope")

  if (collection == null)
    return {
      ...ropePositionDefaultState,
      ...ropeVelocityDefaultState,
      ...ropeMassDefaultState,
      ...ropeChargeDefaultState,
      ...ropeColorDefaultState,
      ...ropeShapeDefaultState,
      ...ropeRadiusDefaultState,
      ...ropeRecursionDefaultState
    }
  return {
    ...collection
  }
}
