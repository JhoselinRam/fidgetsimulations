import useBindState from "../../../useBindState/useBindState"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { SheetProps } from "../../useConfigSheet_types"
import type { UseSheetDynamics } from "./useSheetDynamics_types"

function useSheetDynamics(
  item: CollectionOrder,
  props: SheetProps
): UseSheetDynamics {
  const xPositionProps = useBindState(item, props.positionX, "sheet@positionX")
  const yPositionProps = useBindState(item, props.positionY, "sheet@positionY")
  const xVelocityProps = useBindState(item, props.velocityX, "sheet@velocityX")
  const yVelocityProps = useBindState(item, props.velocityY, "sheet@velocityY")

  return {
    positionHooks: {
      xHooks: {
        value: xPositionProps.value,
        onChange: xPositionProps.changeValue
      },
      yHooks: {
        value: yPositionProps.value,
        onChange: yPositionProps.changeValue
      }
    },
    velocityHooks: {
      xHooks: {
        value: xVelocityProps.value,
        onChange: xVelocityProps.changeValue
      },
      yHooks: {
        value: yVelocityProps.value,
        onChange: yVelocityProps.changeValue
      }
    }
  }
}

export default useSheetDynamics
