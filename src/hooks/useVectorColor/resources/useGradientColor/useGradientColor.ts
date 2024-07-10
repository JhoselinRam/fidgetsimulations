import type { Key } from "react-aria-components"
import useBindState from "../../../useBindState/useBindState"
import type {
  VectorColorMode,
  VectorGradientType
} from "../../../useMainState/resources/Vector/Vector_types"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { VectorColorProps } from "../../useVectorColor_types"
import {
  gradientTypeList,
  type UseGradientColor,
  type VectorGradientItem
} from "./useGradientColor_types"
import useCustomGradient from "../useCustomGradient/useCustomGradient"

const selectItems: VectorGradientItem[] = gradientTypeList.map((item) => ({
  id: item,
  name: item
}))

function useGradientColor(
  item: CollectionOrder,
  vectorProps: VectorColorProps,
  colorMode: VectorColorMode
): UseGradientColor {
  const selectGradient = useBindState(
    item,
    vectorProps.gradientType,
    "vector@gradientType"
  )
  const customGradientHooks = useCustomGradient(
    item,
    vectorProps,
    colorMode,
    selectGradient.value
  )

  function changeSelectGradient(type: Key): void {
    selectGradient.changeValue(type as VectorGradientType)
  }

  return {
    selectItems,
    selectGradientHooks: {
      selectedKey: selectGradient.value,
      onSelectionChange: changeSelectGradient,
      isDisabled: colorMode === "static"
    },
    customGradientHooks
  }
}

export default useGradientColor
