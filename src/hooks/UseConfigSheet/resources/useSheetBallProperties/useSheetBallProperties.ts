import useBindState from "../../../useBindState/useBindState"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { SheetProps } from "../../useConfigSheet_types"
import type { UseSheetBallProperties } from "./useSheetBallProperties_types"

function useSheetBallProperties(
  item: CollectionOrder,
  props: SheetProps
): UseSheetBallProperties {
  const massProps = useBindState(item, props.mass, "sheet@mass")
  const chargeProps = useBindState(item, props.charge, "sheet@charge")
  const radiusProps = useBindState(item, props.radius, "sheet@radius")
  const colorProps = useBindState(item, props.color, "sheet@color")

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

export default useSheetBallProperties
