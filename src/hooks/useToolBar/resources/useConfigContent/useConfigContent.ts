import { type Dispatch, type SetStateAction, useState, useEffect } from "react"
import type { UseConfigContent } from "./useConfigContent_types"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"

function useConfigContent(
  setShowConfig: Dispatch<SetStateAction<boolean>>
): UseConfigContent {
  const [targetCollection, setTargetCollection] =
    useState<CollectionOrder | null>(null)

  useEffect(() => {
    if (targetCollection != null) return

    setShowConfig(false)
  }, [targetCollection, setShowConfig])

  return {
    setTargetCollection,
    targetCollection
  }
}

export default useConfigContent
