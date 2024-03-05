import { ToggleButton } from "react-aria-components"
import type { IconToggleProps } from "./IconToggle_types"

function IconToggle({
  children,
  className,
  coloredBy,
  ...props
}: IconToggleProps): JSX.Element {
  return (
    <ToggleButton
      className={`bg-tuatara-600 flex justify-center items-center outline-none data-[selected]:bg-accent-blue-500
	data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-accent-blue-300/30
	data-[focus-visible]:outline-offset-2 data-[hovered]:bg-tuatara-500 data-[selected]:data-[hovered]:bg-accent-blue-400  
	${
    coloredBy === "fill"
      ? "fill-slate-950 data-[selected]:fill-zinc-100"
      : "stroke-slate-950 data-[selected]:stroke-zinc-100"
  }
	${className}`}
      {...props}
    >
      {children}
    </ToggleButton>
  )
}

export default IconToggle
