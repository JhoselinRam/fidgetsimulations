import useBindState from "../../../useBindState/useBindState"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { RopeProps } from "../../useConfigRope_types"
import type { UseRopeBallProperties } from "./useRopeBallProperties_types"

function useRopeBallProperties(
  item: CollectionOrder,
  props: RopeProps
): UseRopeBallProperties {
  const massProps = useBindState(item, props.mass, "rope@mass")
  const chargeProps = useBindState(item, props.charge, "rope@charge")
  const radiusProps = useBindState(item, props.radius, "rope@radius")
  const colorProps = useBindState(item, props.color, "rope@color")

  return {
    massChargeHooks: {
      massHooks: {
        value: massProps.value,
        onChange: massProps.changeValue
      },
      chargeHooks: {
        value: chargeProps.value,
        onChange: chargeProps.changeValue
      }
    },
    aestheticsHooks: {
      radiusHooks: {
        value: radiusProps.value,
        onChange: radiusProps.changeValue
      },
      colorHooks: {
        value: colorProps.value,
        onChange: colorProps.changeValue
      }
    }
  }
}

export default useRopeBallProperties
