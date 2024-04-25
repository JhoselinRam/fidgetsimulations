import { useState } from "react"
import type {
  NumericControlMode,
  UseNumericControl
} from "./useNumericControl_types"

function useNumericControl(toDefaultValue: number): UseNumericControl {
  const [mode, setMode] = useState<NumericControlMode>("fixed")
  const [fixed, setFixed] = useState(0)
  const [linearFrom, setLinearFrom] = useState(0)
  const [linearTo, setLinearTo] = useState(toDefaultValue)
  const [randomFrom, setRandomFrom] = useState(0)
  const [randomTo, setRandomTo] = useState(toDefaultValue)

  return {
    controlMode: {
      mode,
      changeMode: setMode
    },
    fixed: {
      value: fixed,
      changeValue: setFixed
    },
    linear: {
      from: linearFrom,
      changeFrom: setLinearFrom,
      to: linearTo,
      changeTo: setLinearTo
    },
    random: {
      from: randomFrom,
      changeFrom: setRandomFrom,
      to: randomTo,
      changeTo: setRandomTo
    }
  }
}

export default useNumericControl
