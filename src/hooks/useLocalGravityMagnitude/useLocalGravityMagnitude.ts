import { useCallback, useContext, useEffect, useState } from "react"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type { UseLocalGravityMagnitude } from "./useLocalGravityMagnitude_types"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import type {
  LocalGravityMagnitude,
  LocalGravityState
} from "../useMainState/resources/LocalGravity/LocalGravity_types"
import { localGravityMagnitudeDefaultState } from "../useMainState/resources/LocalGravity/defaultState"
import useBindState from "../useBindState/useBindState"
import { toDegrees, toRadians } from "../../auxiliary/angleAux"
import { toRounded } from "../../auxiliary/toRounded"

function useLocalGravityMagnitude(
  item: CollectionOrder
): UseLocalGravityMagnitude {
  const { mainState } = useContext(mainStateContext)
  const { magnitudeX, magnitudeY } = getMagnitudeProps(item, mainState)
  const magnitudeXProps = useBindState(
    item,
    magnitudeX,
    "localGravity@magnitudeX"
  )
  const magnitudeYProps = useBindState(
    item,
    magnitudeY,
    "localGravity@magnitudeY"
  )

  const [magnitude, setMagnitude] = useState(
    Math.hypot(magnitudeXProps.value, magnitudeYProps.value)
  )
  const [angle, setAngle] = useState(
    toDegrees(Math.atan2(magnitudeYProps.value, magnitudeXProps.value))
  )

  const changeMagnitude = useCallback(
    (value: number): void => {
      const newMagnitude = toRounded(
        value,
        import.meta.env.VITE_ROUNDED_DECIMALS
      )
      magnitudeXProps.changeValue(newMagnitude * Math.cos(toRadians(angle)))
      magnitudeYProps.changeValue(newMagnitude * Math.sin(toRadians(angle)))

      setMagnitude(newMagnitude)
    },
    [angle, magnitudeXProps, magnitudeYProps]
  )

  const changeAngle = useCallback(
    (value: number): void => {
      const newAngle = toRounded(value, import.meta.env.VITE_ROUNDED_DECIMALS)
      magnitudeXProps.changeValue(magnitude * Math.cos(toRadians(newAngle)))
      magnitudeYProps.changeValue(magnitude * Math.sin(toRadians(newAngle)))

      setAngle(newAngle)
    },
    [magnitude, magnitudeXProps, magnitudeYProps]
  )

  useEffect(() => {
    const newMagnitudeX = toRounded(
      magnitudeXProps.value,
      import.meta.env.VITE_ROUNDED_DECIMALS
    )
    const newMagnitudeY = toRounded(
      magnitudeYProps.value,
      import.meta.env.VITE_ROUNDED_DECIMALS
    )

    changeMagnitude(Math.hypot(newMagnitudeX, newMagnitudeY))
    changeAngle(toDegrees(Math.atan2(newMagnitudeY, newMagnitudeX)))

    magnitudeXProps.changeValue(newMagnitudeX)
    magnitudeYProps.changeValue(newMagnitudeY)
  }, [magnitudeXProps, magnitudeYProps, changeMagnitude, changeAngle])

  return {
    rectangularHooks: {
      magnitudeX: magnitudeXProps.value,
      changeMagnitudeX: magnitudeXProps.changeValue,
      magnitudeY: magnitudeYProps.value,
      changeMagnitudeY: magnitudeYProps.changeValue
    },
    polarHooks: {
      magnitude,
      angle,
      changeMagnitude,
      changeAngle
    }
  }
}

export default useLocalGravityMagnitude

function getMagnitudeProps(
  item: CollectionOrder,
  state: MainState
): LocalGravityMagnitude {
  const collection = getCollection<LocalGravityState>(
    item,
    state,
    "localGravity"
  )

  if (collection == null) return { ...localGravityMagnitudeDefaultState }

  return {
    magnitudeX: collection.magnitudeX,
    magnitudeY: collection.magnitudeY
  }
}
