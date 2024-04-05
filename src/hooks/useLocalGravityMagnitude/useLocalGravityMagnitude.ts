import { useContext, useState } from "react"
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
  const [magnitude, setMagnitude] = useState(Math.hypot(magnitudeX, magnitudeY))
  const [angle, setAngle] = useState(
    (Math.atan2(magnitudeY, magnitudeX) * 180) / Math.PI
  )

  return {
    rectangularHooks: {
      magnitudeX: magnitudeXProps.value,
      changeMagnitudeX: magnitudeXProps.changeValue,
      magnitudeY: magnitudeYProps.value,
      changeMagnitudeY: magnitudeYProps.changeValue
    },
    polarHooks: {
      angle,
      changeAngle: setAngle,
      changeMagnitude: setMagnitude,
      magnitude
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
