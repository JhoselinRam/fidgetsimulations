import useBindState from "../useBindState/useBindState"
import type {
  CollectionOrder,
  MainStateActionType
} from "../useMainState/useMainState_types"
import type { UseMoveConfig } from "./useMoveConfig_types"

function useMoveConfig(
  item: CollectionOrder,
  valueX: number,
  valueY: number,
  actionX: MainStateActionType,
  actionY: MainStateActionType
): UseMoveConfig {
  const positionX = useBindState(item, valueX, actionX)
  const positionY = useBindState(item, valueY, actionY)

  return {
    x: positionX.value,
    changeX: positionX.changeValue,
    y: positionY.value,
    changeY: positionY.changeValue
  }
}

export default useMoveConfig
