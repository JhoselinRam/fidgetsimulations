import { forwardRef } from "react"
import type { ButtonProps, StyledTypes } from "./Button_types"
import { Button as RACButton } from "react-aria-components"

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref): JSX.Element => {
    const { className, children, buttonType = "regular", ...rest } = props
    const styledTypes: StyledTypes = {
      accent:
        "data-[hovered]:bg-accent-blue-600 text-zinc-200 data-[pressed]:!bg-accent-blue-500 bg-accent-blue-700 ",
      regular:
        "data-[hovered]:bg-tuatara-400 data-[pressed]:bg-tuatara-300 bg-tuatara-500",
      transparent: "bg-transparent"
    }

    return (
      <RACButton
        className={`
    rounded-md py-0.5 px-4 data-[focused]:outline-none text-sm
    data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-accent-blue-300/30 data-[focus-visible]:outline-offset-1 
    ${styledTypes[buttonType]} 
    ${className as string}
    `}
        {...rest}
        ref={ref}
      >
        {children}
      </RACButton>
    )
  }
)

Button.displayName = "Button"

export default Button
