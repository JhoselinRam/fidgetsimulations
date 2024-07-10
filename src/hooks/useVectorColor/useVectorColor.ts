import { useContext } from "react"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type { UseVectorColor, VectorColorProps } from "./useVectorColor_types"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import useBindState from "../useBindState/useBindState"
import type {
  VectorColorMode,
  VectorState
} from "../useMainState/resources/Vector/Vector_types"
import { vectorDefaultState } from "../useMainState/resources/Vector/defaultState"
import useDynamicColor from "./resources/useDynamicColor/useDynamicColor"

function useVectorColor(item: CollectionOrder): UseVectorColor {
  const { mainState } = useContext(mainStateContext)
  const vectorProps = getVectorProps(item, mainState)

  const colorMode = useBindState(
    item,
    vectorProps.colorMode,
    "vector@colorMode"
  )
  const color = useBindState(item, vectorProps.color, "vector@color")
  const dynamicHooks = useDynamicColor(item, vectorProps, colorMode.value)

  function onColorModeChange(mode: string): void {
    colorMode.changeValue(mode as VectorColorMode)
  }

  return {
    colorModeHooks: {
      value: colorMode.value,
      onChange: onColorModeChange
    },
    colorHooks: {
      value: color.value,
      onChange: color.changeValue,
      isDisabled: colorMode.value === "dynamic"
    },
    dynamicHooks
  }
}

export default useVectorColor

function getVectorProps(
  item: CollectionOrder,
  mainState: MainState
): VectorColorProps {
  const collection = getCollection<VectorState>(item, mainState, [
    "velocityVector",
    "accelerationVector"
  ])

  if (collection == null)
    return {
      color: vectorDefaultState.color,
      colorMode: vectorDefaultState.colorMode,
      gradientSpace: vectorDefaultState.gradientSpace,
      gradientStops: vectorDefaultState.gradientStops,
      gradientType: vectorDefaultState.gradientType,
      maxColorMagnitude: vectorDefaultState.maxColorMagnitude,
      minColorMagnitude: vectorDefaultState.minColorMagnitude
    }

  return {
    color: collection.color,
    colorMode: collection.colorMode,
    gradientSpace: collection.gradientSpace,
    gradientStops: collection.gradientStops,
    gradientType: collection.gradientType,
    maxColorMagnitude: collection.maxColorMagnitude,
    minColorMagnitude: collection.minColorMagnitude
  }
}
