import { Input, TextField } from "react-aria-components"
import type { ConfigCollectionProps } from "../ConfigCollection/ConfigCollection_types"
import useRenameCollection from "../../hooks/useRenameCollection/useRenameCollection"
import Button from "../Button/Button"
import EditIcon from "../Icons/EditIcon/EditIcon"

function RenameCollection({ item }: ConfigCollectionProps): JSX.Element {
  const { name, isEditing, onPressEdit, renameInputProps } =
    useRenameCollection(item)

  return (
    <header className="h-6 flex flex-row gap-1 justify-between items-center mx-6 rounded-t-md text-zinc-300 border-b-2 border-b-tuatara-200">
      {isEditing ? (
        <TextField
          className="w-full bg-transparent"
          aria-label="edit name"
          autoFocus={true}
          {...renameInputProps}
        >
          <Input className="w-full bg-transparent text-center outline-none" />
        </TextField>
      ) : (
        <span className="flex-grow text-center overflow-hidden text-nowrap">
          {name}
        </span>
      )}
      <Button
        className="stroke-zinc-300 w-4 !p-0 data-[hovered]:stroke-zinc-50 data-[disabled]:stroke-tuatara-600
        data-[focus-visible]:!outline-offset-2"
        buttonType="transparent"
        onPress={onPressEdit}
        isDisabled={isEditing}
      >
        <EditIcon />
      </Button>
    </header>
  )
}

export default RenameCollection
