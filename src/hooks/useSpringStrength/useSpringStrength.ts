import { useContext } from "react"
import type {
  SpringState,
  SpringStrength
} from "../useMainState/resources/Spring/Spring_types"
import { springStrengthDefaultState } from "../useMainState/resources/Spring/defaultState"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type { UseSpringStrength } from "./useSpringStrength_types"
import useBindState from "../useBindState/useBindState"

function useSpringStrength(item: CollectionOrder): UseSpringStrength {
  const { mainState } = useContext(mainStateContext)
  const { strength } = getStrengthProps(item, mainState)

  const strengthProps = useBindState(item, strength, "spring@strength")

  return {
    value: strengthProps.value,
    onChange: strengthProps.changeValue
  }
}

export default useSpringStrength

function getStrengthProps(
  item: CollectionOrder,
  state: MainState
): SpringStrength {
  const collection = getCollection<SpringState>(item, state, "spring")
  if (collection == null)
    return {
      ...springStrengthDefaultState
    }

  return {
    strength: collection.strength
  }
}
