import type { UseEditValue } from "./resources/useEditValue/useEditValue_types"

export interface UseRenameItem {
  onPressEdit: () => void
  innerValue: string
  inputHooks: InputHooks
  isEditing: boolean
}

export interface InputHooks extends UseEditValue {
  onChange: (value: string) => void
}
