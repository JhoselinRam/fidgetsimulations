import {
  Dialog,
  DialogTrigger,
  OverlayArrow,
  Popover
} from "react-aria-components"
import type { GradientConfigProps } from "./GradientConfig_types"
import Button from "../../../Button/Button"
import OptionsIcon from "../../../Icons/OptionsIcon/OptionsIcon"

function GradientConfig({
  changeSpace,
  knobs,
  space
}: GradientConfigProps): JSX.Element {
  return (
    <DialogTrigger>
      <Button
        className="w-4 !p-0 !bg-accent-blue-700 rounded-l-none fill-zinc-300
        data-[hovered]:!bg-accent-blue-600 data-[focus-visible]:!outline-1"
        buttonType="transparent"
      >
        <OptionsIcon />
      </Button>
      <Popover>
        <OverlayArrow>
          <svg width={12} height={12} viewBox="0 0 12 12">
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
        <Dialog>Configs :v</Dialog>
      </Popover>
    </DialogTrigger>
  )
}

export default GradientConfig
