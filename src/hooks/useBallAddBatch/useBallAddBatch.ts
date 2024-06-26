import { useContext, useState } from "react"
import type { UseBallAddBatch } from "./useBallAddBatch_types"
import useNumericControl from "./resources/useNumericControl/useNumericControl"
import useColorControl from "./resources/useColorControl/useColorControl"
import { mainStateContext } from "../useMainState/useMainState"
import {
  ballRadiusDefaultState,
  createBallState
} from "../useMainState/resources/Balls/defaultState"
import type { UseNumericControl } from "./resources/useNumericControl/useNumericControl_types"
import type { UseColorControl } from "./resources/useColorControl/useColorControl_types"
import { createColorGradient } from "../../auxiliary/colorGradient"
import { simulationWindowDefaultState } from "../useMainState/resources/SimulationWindow/defaultState"

function useBallAddBatch(): UseBallAddBatch {
  const { dispatch } = useContext(mainStateContext)
  const [number, setNumber] = useState(1)
  const xPositionHooks = useNumericControl({
    from: simulationWindowDefaultState.startX + ballRadiusDefaultState.radius,
    to: simulationWindowDefaultState.endX - ballRadiusDefaultState.radius
  })
  const yPositionHooks = useNumericControl({
    from: simulationWindowDefaultState.startY + ballRadiusDefaultState.radius,
    to: simulationWindowDefaultState.endY - ballRadiusDefaultState.radius
  })
  const xVelocityHooks = useNumericControl({ to: 10 })
  const yVelocityHooks = useNumericControl({ to: 10 })
  const massHooks = useNumericControl({ from: 0.5, to: 1, fix: 1 })
  const chargeHooks = useNumericControl({ from: 0.001, to: 0.01, fix: 0.001 })
  const radiusHooks = useNumericControl({ fix: 0.3, to: 0.6, from: 0.3 })
  const colorHooks = useColorControl()

  function changeNumber(value: number): void {
    setNumber(Math.round(value))
  }

  function createBatch(): void {
    for (let i = 0; i < number; i++) {
      const newBall = createBallState()

      newBall.name = `Batch Ball ${i + 1}`
      newBall.positionX = getNumericProperty(xPositionHooks, i, number)
      newBall.positionY = getNumericProperty(yPositionHooks, i, number)
      newBall.velocityX = getNumericProperty(xVelocityHooks, i, number)
      newBall.velocityY = getNumericProperty(yVelocityHooks, i, number)

      newBall.mass = getNumericProperty(massHooks, i, number)
      newBall.charge = getNumericProperty(chargeHooks, i, number)
      newBall.radius = getNumericProperty(radiusHooks, i, number)
      newBall.color = getColorProperty(colorHooks, i, number)

      dispatch({ type: "balls@new", payload: { ...newBall } })
    }
  }

  return {
    number,
    changeNumber,
    xPositionHooks,
    yPositionHooks,
    xVelocityHooks,
    yVelocityHooks,
    massHooks,
    chargeHooks,
    radiusHooks,
    colorHooks,
    createBatch
  }
}

export default useBallAddBatch

function getNumericProperty(
  data: UseNumericControl,
  index: number,
  number: number
): number {
  if (data.controlMode.mode === "fixed") return data.fixed.value

  if (data.controlMode.mode === "linear") {
    return (
      data.linear.from +
      ((data.linear.to - data.linear.from) * index) / (number - 1)
    )
  }

  // if ...mode == "random"
  return data.random.from + (data.random.to - data.random.from) * Math.random()
}

function getColorProperty(
  data: UseColorControl,
  index: number,
  number: number
): string {
  if (data.controlMode.mode === "fixed") return data.fixed.value

  if (data.controlMode.mode === "linear") {
    const colorMap = createColorGradient(data.linear.knobs, data.linear.space)
    return colorMap(index / (number - 1))
  }

  // if ...mode == "random"
  const colorMap = createColorGradient(data.random.knobs, data.random.space)

  return colorMap(Math.random())
}
