import type { UseCollectionName } from "./resources/useCollectionName/useCollectionName_types"
import type { UseRenameInput } from "./resources/useRenameInput/useRenameInput_types"

export interface UseRenameCollection extends UseCollectionName {
  isEditing: boolean
  onPressEdit: () => void
  renameInputProps: UseRenameInput
}
