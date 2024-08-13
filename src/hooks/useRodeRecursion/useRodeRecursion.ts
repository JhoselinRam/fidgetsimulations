import { useContext } from "react"
import type { RodState } from "../useMainState/resources/Rod/Rod_types"
import { rodRecursionDefaultState } from "../useMainState/resources/Rod/defaultState"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type { UseRodRecursion } from "./useRodRecursion_types"
import useBindState from "../useBindState/useBindState"

function useRodRecursion(item: CollectionOrder): UseRodRecursion {
  const { mainState } = useContext(mainStateContext)
  const recursion = getRodRecursion(item, mainState)

  const recursionProps = useBindState(item, recursion, "rod@recursion")

  function changeRecursion(value: number): void {
    const usedValue = Math.round(value)
    recursionProps.changeValue(usedValue)
  }

  return {
    recursionHooks: {
      value: recursionProps.value,
      onChange: changeRecursion
    }
  }
}

export default useRodRecursion

function getRodRecursion(item: CollectionOrder, state: MainState): number {
  const collection = getCollection<RodState>(item, state, "rod")

  if (collection == null) return rodRecursionDefaultState.recursion

  return collection.recursion
}
