import { useContext } from "react"
import type { BallVectorType } from "../../components/BallsConfigComponents/BallConfigComponents_types"
import {
  gradientTypeList,
  type UseVectorColorGradient,
  type VectorGradientItem
} from "./useVectorColorGradient_types"
import { mainStateContext } from "../useMainState/useMainState"
import useBindState from "../useBindState/useBindState"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import type { VectorGradientType } from "../useMainState/resources/Vector/Vector_types"
import type { Key } from "react-aria-components"

const selectItems: VectorGradientItem[] = gradientTypeList.map((item) => ({
  id: item,
  name: item
}))

function useVectorColorGradient(type: BallVectorType): UseVectorColorGradient {
  const { mainState } = useContext(mainStateContext)
  const id = type === "velocity" ? "velocityVector" : "accelerationVector"
  const item: CollectionOrder = { id, type: "balls" }
  const gradientType = mainState[id].gradientType
  const isDisabled = mainState[id].colorMode === "static"

  const gradientTypeHooks = useBindState(
    item,
    gradientType,
    "vector@gradientType"
  )

  function onGradientTypeChange(newGradient: Key): void {
    gradientTypeHooks.changeValue(newGradient as VectorGradientType)
  }

  return {
    selectItems,
    selectGradientHooks: {
      selectedKey: gradientTypeHooks.value,
      onSelectionChange: onGradientTypeChange
    },
    isDisabled
  }
}

export default useVectorColorGradient
