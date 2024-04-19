import Button from "../../../Button/Button"
import CloseIcon from "../../../Icons/CloseIcon/CloseIcon"
import type { GradientConfigCloseProps } from "./GradientConfigClose_types"

function GradientConfigClose({
  onClose
}: GradientConfigCloseProps): JSX.Element {
  return (
    <Button
      className="w-4 !px-0 absolute top-2 right-1 group"
      buttonType="transparent"
      aria-label="closeToolBar"
      onPress={onClose}
    >
      <CloseIcon className="fill-zinc-300 group-data-[hovered]:fill-zinc-300/70" />
    </Button>
  )
}

export default GradientConfigClose
