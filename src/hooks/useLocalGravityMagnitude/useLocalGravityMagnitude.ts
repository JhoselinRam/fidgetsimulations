import { useCallback, useContext, useEffect, useState } from "react"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type {
  LocalGravityActionPiker,
  LocalGravitySetterPiker,
  UseLocalGravityMagnitude
} from "./useLocalGravityMagnitude_types"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import type {
  LocalGravityMagnitude,
  LocalGravityState
} from "../useMainState/resources/LocalGravity/LocalGravity_types"
import { localGravityMagnitudeDefaultState } from "../useMainState/resources/LocalGravity/defaultState"
import { toDegrees, toRadians } from "../../auxiliary/angleAux"
import { toRounded } from "../../auxiliary/toRounded"

function useLocalGravityMagnitude(
  item: CollectionOrder
): UseLocalGravityMagnitude {
  const { mainState, dispatch } = useContext(mainStateContext)
  const { magnitudeX, magnitudeY } = getMagnitudeProps(item, mainState)

  const [gravityX, setGravityX] = useState(magnitudeX)
  const [gravityY, setGravityY] = useState(magnitudeY)
  const [magnitude, setMagnitude] = useState(Math.hypot(magnitudeX, magnitudeY))
  const [angle, setAngle] = useState(
    toDegrees(Math.atan2(magnitudeY, magnitudeX))
  )

  const updateGravity = useCallback(
    (value: number, key: keyof LocalGravityMagnitude) => {
      const action: LocalGravityActionPiker = {
        magnitudeX: "localGravity@magnitudeX",
        magnitudeY: "localGravity@magnitudeY"
      }
      const setter: LocalGravitySetterPiker = {
        magnitudeX: setGravityX,
        magnitudeY: setGravityY
      }

      const payload: Record<string, unknown> = { ...item }
      payload[key] = value

      dispatch({ type: action[key], payload })
      setter[key](value)
    },
    [dispatch, item]
  )

  const changeGravityX = useCallback(
    (value: number) => {
      const newGravityX = toRounded(
        value,
        import.meta.env.VITE_ROUNDED_DECIMALS
      )
      updateGravity(newGravityX, "magnitudeX")

      const newMagnitude = toRounded(
        Math.hypot(newGravityX, gravityY),
        import.meta.env.VITE_ROUNDED_DECIMALS
      )
      const newAngle = toRounded(
        toDegrees(Math.atan2(gravityY, newGravityX)),
        import.meta.env.VITE_ROUNDED_DECIMALS
      )

      setMagnitude(newMagnitude)
      setAngle(newAngle)
    },
    [updateGravity, gravityY]
  )

  const changeGravityY = useCallback(
    (value: number) => {
      const newGravityY = toRounded(
        value,
        import.meta.env.VITE_ROUNDED_DECIMALS
      )
      updateGravity(newGravityY, "magnitudeY")

      const newMagnitude = toRounded(
        Math.hypot(gravityX, newGravityY),
        import.meta.env.VITE_ROUNDED_DECIMALS
      )
      const newAngle = toRounded(
        toDegrees(Math.atan2(newGravityY, gravityX)),
        import.meta.env.VITE_ROUNDED_DECIMALS
      )

      setMagnitude(newMagnitude)
      setAngle(newAngle)
    },
    [updateGravity, gravityX]
  )

  const changeMagnitude = useCallback(
    (value: number) => {
      const newMagnitude = toRounded(
        value,
        import.meta.env.VITE_ROUNDED_DECIMALS
      )
      setMagnitude(newMagnitude)

      updateGravity(
        toRounded(
          newMagnitude * Math.cos(toRadians(angle)),
          import.meta.env.VITE_ROUNDED_DECIMALS
        ),
        "magnitudeX"
      )
      updateGravity(
        toRounded(
          newMagnitude * Math.sin(toRadians(angle)),
          import.meta.env.VITE_ROUNDED_DECIMALS
        ),
        "magnitudeY"
      )
    },
    [angle, updateGravity]
  )

  const changeAngle = useCallback(
    (value: number) => {
      const newAngle = toRounded(value, import.meta.env.VITE_ROUNDED_DECIMALS)
      setAngle(newAngle)

      updateGravity(
        toRounded(
          magnitude * Math.cos(toRadians(newAngle)),
          import.meta.env.VITE_ROUNDED_DECIMALS
        ),
        "magnitudeX"
      )
      updateGravity(
        toRounded(
          magnitude * Math.sin(toRadians(newAngle)),
          import.meta.env.VITE_ROUNDED_DECIMALS
        ),
        "magnitudeY"
      )
    },
    [updateGravity, magnitude]
  )

  useEffect(() => {
    changeGravityX(magnitudeX)
  }, [magnitudeX, changeGravityX])

  useEffect(() => {
    changeGravityY(magnitudeY)
  }, [magnitudeY, changeGravityY])

  return {
    rectangularHooks: {
      magnitudeX: gravityX,
      magnitudeY: gravityY,
      changeMagnitudeX: changeGravityX,
      changeMagnitudeY: changeGravityY
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
