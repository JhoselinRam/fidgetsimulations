import type { CollectionOrder } from "../useMainState/useMainState_types"
import useMagnitude from "./resources/useMagnitude/useMagnitude"
import type { UseSimpleForce } from "./useSimpleForce_types"

function useSimpleForce(item: CollectionOrder): UseSimpleForce {
  const magnitudeHooks = useMagnitude(item)

  return {
    magnitudeHooks
  }
}

export default useSimpleForce
