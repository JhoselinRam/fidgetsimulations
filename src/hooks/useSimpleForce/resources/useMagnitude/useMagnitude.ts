import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { UseMagnitude } from "./useMagnitude_types"
import useBindState from "../../../useBindState/useBindState"

function useMagnitude(item: CollectionOrder, magnitude: number): UseMagnitude {
  const simpleMagnitudeState = useBindState(
    item,
    magnitude,
    "simpleForce@magnitude"
  )

  return {
    value: simpleMagnitudeState.value,
    onChange: simpleMagnitudeState.changeValue
  }
}

export default useMagnitude
