import type { UseCollectionName } from "./resources/useCollectionName/useCollectionName_types"

export interface UseRenameCollection extends UseCollectionName {
  isEditing: boolean
  onPressEdit: () => void
  onInputBlur: () => void
  onInputChange: (newName: string) => void
}
