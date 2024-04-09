import { Input, TextField } from "react-aria-components"
import type { RenameItemProps } from "./RenameItem_types"
import Button from "../Button/Button"
import EditIcon from "../Icons/EditIcon/EditIcon"
import useRenameItem from "../../hooks/useRenameItem/useRenameItem"

function RenameItem({
  className,
  disabled,
  iconClassName,
  onChange,
  value
}: RenameItemProps): JSX.Element {
  const { innerValue, inputHooks, isEditing, onPressEdit } = useRenameItem(
    disabled ?? false,
    value,
    onChange
  )

  return (
    <header
      className={`h-6 flex flex-row gap-1 justify-between items-center border-b-2 border-b-tuatara-200 ${className}`}
    >
      {isEditing ? (
        <TextField
          className="w-full bg-transparent"
          aria-label="edit name"
          autoFocus={true}
          {...inputHooks}
        >
          <Input className="w-full bg-transparent text-center outline-none" />
        </TextField>
      ) : (
        <span className="flex-grow text-center overflow-hidden text-nowrap">
          {innerValue}
        </span>
      )}
      <Button
        className={`stroke-zinc-300 w-4 !p-0 data-[hovered]:stroke-zinc-50 data-[disabled]:stroke-tuatara-600
        data-[focus-visible]:!outline-offset-2 ${iconClassName}`}
        buttonType="transparent"
        onPress={onPressEdit}
        isDisabled={isEditing || disabled}
      >
        <EditIcon />
      </Button>
    </header>
  )
}

export default RenameItem
