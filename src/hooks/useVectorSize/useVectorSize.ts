import { useContext } from "react"
import type { BallVectorType } from "../../components/BallsConfigComponents/BallConfigComponents_types"
import type { UseVectorSize, VectorSizeProps } from "./useVectorSize_types"
import { mainStateContext } from "../useMainState/useMainState"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import useBindState from "../useBindState/useBindState"

function useVectorSize(type: BallVectorType): UseVectorSize {
  const { mainState } = useContext(mainStateContext)
  const id = type === "velocity" ? "velocityVector" : "accelerationVector"
  const item: CollectionOrder = { id, type: "balls" }
  const vectorProps = getVectorSizeProps(id, mainState)

  const normalizeProps = useBindState(
    item,
    vectorProps.normalize,
    "vector@normalize"
  )
  const maxSizeProps = useBindState(item, vectorProps.maxSize, "vector@maxSize")
  const magnitudeProps = useBindState(
    item,
    vectorProps.maxSizeMagnitude,
    "vector@maxSizeMagnitude"
  )
  const isDisabled = !normalizeProps.value

  return {
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
        value: magnitudeProps.value,
        onChange: magnitudeProps.changeValue,
        isDisabled
      }
    }
  }
}

export default useVectorSize

function getVectorSizeProps(
  id: "velocityVector" | "accelerationVector",
  mainState: MainState
): VectorSizeProps {
  const vectorData = mainState[id]

  return {
    normalize: vectorData.normalize,
    maxSize: vectorData.maxSize,
    maxSizeMagnitude: vectorData.maxSizeMagnitude
  }
}
