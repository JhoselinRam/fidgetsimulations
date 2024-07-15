import Button from "../../../Button/Button"
import CloseIcon from "../../../Icons/CloseIcon/CloseIcon"
import type { ConfigModalCloseProps } from "./ConfigModalClose_types"

function ConfigModalClose({
  close,
  onClose
}: ConfigModalCloseProps): JSX.Element {
  return (
    <Button
      className="w-6 !px-0 absolute top-2 right-1 group"
      buttonType="transparent"
      aria-label="closeToolBar"
      onPress={() => {
        if (onClose != null) onClose()
        close()
      }}
    >
      <CloseIcon className="fill-zinc-300 group-data-[hovered]:fill-zinc-300/70" />
    </Button>
  )
}

export default ConfigModalClose
