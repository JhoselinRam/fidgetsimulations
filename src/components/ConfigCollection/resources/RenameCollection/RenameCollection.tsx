import { Input, TextField } from "react-aria-components"
import useRenameCollection from "../../../../hooks/useRenameCollection/useRenameCollection"
import Button from "../../../Button/Button"
import EditIcon from "../../../Icons/EditIcon/EditIcon"
import type { ConfigCollectionProps } from "../../ConfigCollection_types"

function RenameCollection({ item }: ConfigCollectionProps): JSX.Element {
  const { name, isEditing, onPressEdit } = useRenameCollection(item)

  return (
    <header className="flex flex-row justify-between items-center mx-6 rounded-md text-zinc-300">
      {isEditing ? (
        <TextField className="w-full" aria-label="edit name">
          <Input className="w-full" />
        </TextField>
      ) : (
        <span className="flex-grow text-center overflow-hidden">{name}</span>
      )}
      <Button
        className="stroke-tuatara-300 w-5 !p-0"
        buttonType="transparent"
        onPress={onPressEdit}
      >
        <EditIcon />
      </Button>
    </header>
  )
}

export default RenameCollection
