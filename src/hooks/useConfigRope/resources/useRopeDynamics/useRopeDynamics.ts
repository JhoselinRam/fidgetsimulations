import useBindState from "../../../useBindState/useBindState"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { RopeProps } from "../../useConfigRope_types"
import type { UseRopeDynamics } from "./useRopeDynamics_types"

function useRopeDynamics(
  item: CollectionOrder,
  props: RopeProps
): UseRopeDynamics {
  const xPositionProps = useBindState(item, props.positionX, "rope@positionX")
  const yPositionProps = useBindState(item, props.positionY, "rope@positionY")
  const xVelocityProps = useBindState(item, props.velocityX, "rope@velocityX")
  const yVelocityProps = useBindState(item, props.velocityY, "rope@velocityY")

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

export default useRopeDynamics
