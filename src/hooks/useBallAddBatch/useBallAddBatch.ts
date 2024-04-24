import { useState } from "react"
import type { UseBallAddBatch } from "./useBallAddBatch_types"
import useNumericControl from "./resources/useNumericControl/useNumericControl"
import useColorControl from "./resources/useColorControl/useColorControl"

function useBallAddBatch(): UseBallAddBatch {
  const [number, setNumber] = useState(0)
  const xPositionHooks = useNumericControl()
  const yPositionHooks = useNumericControl()
  const xVelocityHooks = useNumericControl()
  const yVelocityHooks = useNumericControl()
  const massHooks = useNumericControl()
  const chargeHooks = useNumericControl()
  const radiusHooks = useNumericControl()
  const colorHooks = useColorControl()

  return {
    number,
    changeNumber: setNumber,
    xPositionHooks,
    yPositionHooks,
    xVelocityHooks,
    yVelocityHooks,
    massHooks,
    chargeHooks,
    radiusHooks,
    colorHooks
  }
}

export default useBallAddBatch
