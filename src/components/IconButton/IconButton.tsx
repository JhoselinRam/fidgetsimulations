import Button from "../Button/Button"
import type { IconButtonProps } from "./IconButton_types"

function IconButton({
  coloredBy,
  children,
  ...props
}: IconButtonProps): JSX.Element {
  return (
    <Button
      className={`w-5 !p-0.5 bg-tuatara-600 text-slate-950 text-sm data-[focus-visible]:outline-offset-2
        data-[pressed]:bg-accent-blue-500 data-[hovered]:bg-tuatara-500 data-[pressed]:text-zinc-100
        ${
          coloredBy === "fill"
            ? "fill-slate-950 data-[pressed]:fill-zinc-100"
            : "stroke-slate-950 data-[pressed]:stroke-zinc-100"
        }`}
      buttonType="transparent"
      {...props}
    >
      {children}
    </Button>
  )
}

export default IconButton
