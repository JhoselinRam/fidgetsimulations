import { useState } from "react"
import type {
  NumericControlDefaultValues,
  NumericControlMode,
  UseNumericControl
} from "./useNumericControl_types"

function useNumericControl({
  fix,
  from,
  to
}: NumericControlDefaultValues): UseNumericControl {
  const [mode, setMode] = useState<NumericControlMode>("fixed")
  const [fixed, setFixed] = useState(fix ?? 0)
  const [linearFrom, setLinearFrom] = useState(from ?? 0)
  const [linearTo, setLinearTo] = useState(to ?? 0)
  const [randomFrom, setRandomFrom] = useState(from ?? 0)
  const [randomTo, setRandomTo] = useState(to ?? 0)

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
