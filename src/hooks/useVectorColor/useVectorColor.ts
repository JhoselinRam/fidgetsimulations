import { useContext } from "react"
import type { BallVectorType } from "../../components/BallsConfigComponents/BallConfigComponents_types"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import type { UseVectorColor } from "./useVectorColor_types"
import { mainStateContext } from "../useMainState/useMainState"
import useBindState from "../useBindState/useBindState"
import type { VectorColorMode } from "../useMainState/resources/Vector/Vector_types"

function useVectorColor(type: BallVectorType): UseVectorColor {
  const { mainState } = useContext(mainStateContext)
  const id = type === "velocity" ? "velocityVector" : "accelerationVector"
  const item: CollectionOrder = { id, type: "balls" }

  const colorMode = useBindState(
    item,
    mainState[id].colorMode,
    "vector@colorMode"
  )

  function onColorModeChange(mode: string): void {
    colorMode.changeValue(mode as VectorColorMode)
  }

  return {
    value: colorMode.value,
    onChange: onColorModeChange
  }
}

export default useVectorColor
