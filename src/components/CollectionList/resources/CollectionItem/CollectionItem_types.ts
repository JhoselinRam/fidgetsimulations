import type { Dispatch, SetStateAction } from "react"
import type { CollectionOrder } from "../../../../hooks/useMainState/useMainState_types"
import type { Selection } from "react-aria-components"

export interface CollectionItemProps {
  item: CollectionOrder
  setSelection: Dispatch<SetStateAction<Selection>>
}
