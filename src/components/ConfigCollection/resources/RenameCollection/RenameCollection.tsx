import { Input, TextField } from "react-aria-components"
import useRenameCollection from "../../../../hooks/useRenameCollection/useRenameCollection"
import Button from "../../../Button/Button"
import EditIcon from "../../../Icons/EditIcon/EditIcon"
import type { ConfigCollectionProps } from "../../ConfigCollection_types"

function RenameCollection({ item }: ConfigCollectionProps): JSX.Element {
  const { name, isEditing, onPressEdit, onInputBlur, onInputChange } =
    useRenameCollection(item)

  return (
    <header className="flex flex-row justify-between items-center mx-6 rounded-t-md text-zinc-300 border-b-2 border-b-tuatara-200 text-lg">
      {isEditing ? (
        <TextField
          className="w-full"
          aria-label="edit name"
          onBlur={onInputBlur}
          value={name}
          onChange={onInputChange}
        >
          <Input className="w-full" />
        </TextField>
      ) : (
        <span className="flex-grow text-center overflow-hidden whitespace-nowrap">
          {name}
        </span>
      )}
      <Button
        className="stroke-zinc-300 w-5 !p-0 data-[hovered]:stroke-zinc-50 data-[disabled]:stroke-tuatara-600"
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
