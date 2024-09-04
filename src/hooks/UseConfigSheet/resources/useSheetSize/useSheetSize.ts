import useBindState from "../../../useBindState/useBindState"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { SheetProps } from "../../useConfigSheet_types"
import type { UseSheetSize } from "./useSheetSize_types"

function useSheetSize(item: CollectionOrder, props: SheetProps): UseSheetSize {
  const widthProps = useBindState(item, props.width, "sheet@width")
  const heightProps = useBindState(item, props.height, "sheet@height")
  const angleProps = useBindState(item, props.angle, "sheet@angle")

  return {
    widthHooks: {
      value: widthProps.value,
      onChange: widthProps.changeValue
    },
    heightHooks: {
      value: heightProps.value,
      onChange: heightProps.changeValue
    },
    angleHooks: {
      value: angleProps.value,
      onChange: angleProps.changeValue
    }
  }
}

export default useSheetSize
