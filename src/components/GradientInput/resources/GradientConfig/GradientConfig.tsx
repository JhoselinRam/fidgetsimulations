import {
  Dialog,
  DialogTrigger,
  OverlayArrow,
  Popover
} from "react-aria-components"
import type { GradientConfigProps } from "./GradientConfig_types"
import Button from "../../../Button/Button"
import OptionsIcon from "../../../Icons/OptionsIcon/OptionsIcon"
import GradientConfigForm from "../GradientConfigForm/GradientConfigForm"

function GradientConfig({ ...formProps }: GradientConfigProps): JSX.Element {
  return (
    <DialogTrigger>
      <Button
        className="w-4 !p-0 !bg-accent-blue-700 rounded-l-none fill-zinc-300
        data-[hovered]:!bg-accent-blue-600 data-[focus-visible]:!outline-1"
        buttonType="transparent"
      >
        <OptionsIcon />
      </Button>
      <Popover
        className="group bg-tuatara-900 border-tuatara-500 text-zinc-950 border rounded-md text-xs w-full max-w-60
      data-[entering]:data-[placement=top]:animate-info-top-enter data-[exiting]:data-[placement=top]:animate-info-top-exit
        data-[entering]:data-[placement=bottom]:animate-info-bottom-enter data-[exiting]:data-[placement=bottom]:animate-info-bottom-exit
        data-[entering]:data-[placement=left]:animate-info-left-enter data-[exiting]:data-[placement=left]:animate-info-left-exit
        data-[entering]:data-[placement=right]:animate-info-right-enter data-[exiting]:data-[placement=right]:animate-info-right-exit"
        offset={10}
        crossOffset={-90}
      >
        <OverlayArrow>
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            className="stroke-tuatara-500 fill-tuatara-900 group-data-[placement=right]:rotate-90
            group-data-[placement=left]:-rotate-90 group-data-[placement=bottom]:rotate-180"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
        <Dialog className="outline-none w-full relative">
          <GradientConfigForm {...formProps} />
        </Dialog>
      </Popover>
    </DialogTrigger>
  )
}

export default GradientConfig
