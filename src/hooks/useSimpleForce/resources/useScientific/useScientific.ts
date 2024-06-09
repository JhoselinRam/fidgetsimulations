import { useCallback, useContext, useEffect, useState } from "react"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { UseScientific } from "./useScientific_types"
import { mainStateContext } from "../../../useMainState/useMainState"

function useScientific(
  item: CollectionOrder,
  magnitude: number
): UseScientific {
  const { dispatch } = useContext(mainStateContext)
  const outerPower = Math.floor(Math.log10(magnitude))
  const outerValue = magnitude / 10 ** outerPower
  const [value, setValue] = useState(outerValue)
  const [power, setPower] = useState(outerPower)

  const updateMagnitude = useCallback(
    (newValue: number, newPower: number) => {
      const newMagnitude = newValue * 10 ** newPower

      const payload: Record<string, unknown> = { ...item }
      payload.magnitude = newMagnitude

      dispatch({ type: "simpleForce@magnitude", payload })
    },
    [dispatch, item]
  )

  const changeValue = useCallback(
    (newValue: number): void => {
      updateMagnitude(newValue, power)
      setValue(newValue)
    },
    [updateMagnitude, power]
  )

  const changePower = useCallback(
    (newPower: number) => {
      const validPower = Math.round(newPower)
      updateMagnitude(value, validPower)
      setPower(validPower)
    },
    [updateMagnitude, value]
  )

  useEffect(() => {
    const newPower = Math.floor(Math.log10(magnitude))
    const newValue = magnitude / 10 ** newPower

    setValue(newValue)
    setPower(newPower)
  }, [magnitude])

  return {
    scientificMagnitudeHooks: {
      value,
      onChange: changeValue
    },
    scientificPowerHooks: {
      value: power,
      onChange: changePower
    }
  }
}

export default useScientific
