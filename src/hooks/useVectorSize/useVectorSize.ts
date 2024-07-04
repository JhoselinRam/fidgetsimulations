import { useContext } from "react"
import type { UseVectorSize, VectorSizeProps } from "./useVectorSize_types"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import useBindState from "../useBindState/useBindState"
import type { VectorState } from "../useMainState/resources/Vector/Vector_types"
import { vectorDefaultState } from "../useMainState/resources/Vector/defaultState"

function useVectorSize(item: CollectionOrder): UseVectorSize {
  const { mainState } = useContext(mainStateContext)
  const { enable, maxSize, maxSizeMagnitude, normalize } = getVectorSizeProps(
    item,
    mainState
  )

  const enableProps = useBindState(item, enable, "vector@enable")
  const normalizeProps = useBindState(item, normalize, "vector@normalize")
  const maxSizeProps = useBindState(item, maxSize, "vector@maxSize")
  const maxSizeMagnitudeProps = useBindState(
    item,
    maxSizeMagnitude,
    "vector@maxSizeMagnitude"
  )

  const isDisabled = !normalizeProps.value

  return {
    enableHooks: {
      isSelected: enableProps.value,
      onChange: enableProps.changeValue
    },
    normalizeHooks: {
      isSelected: normalizeProps.value,
      onChange: normalizeProps.changeValue
    },
    sizeHooks: {
      maxSizeHooks: {
        value: maxSizeProps.value,
        onChange: maxSizeProps.changeValue,
        isDisabled
      },
      magnitudeHooks: {
        value: maxSizeMagnitudeProps.value,
        onChange: maxSizeMagnitudeProps.changeValue,
        isDisabled
      }
    }
  }
}

export default useVectorSize

function getVectorSizeProps(
  item: CollectionOrder,
  mainState: MainState
): VectorSizeProps {
  const collection = getCollection<VectorState>(item, mainState, [
    "velocityVector",
    "accelerationVector"
  ])

  if (collection == null)
    return {
      enable: vectorDefaultState.enable,
      maxSize: vectorDefaultState.maxSize,
      maxSizeMagnitude: vectorDefaultState.maxSizeMagnitude,
      normalize: vectorDefaultState.normalize
    }

  return {
    enable: collection.enable,
    maxSize: collection.maxSize,
    maxSizeMagnitude: collection.maxSizeMagnitude,
    normalize: collection.normalize
  }
}
