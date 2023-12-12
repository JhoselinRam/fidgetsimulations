import type { ButtonProps, StyledTypes } from "./Button_types"
import { Button as RACButton } from "react-aria-components"

function Button(props: ButtonProps): JSX.Element {
  const {className, children, buttonType="regular", ...rest} = props
  const styledTypes: StyledTypes = {
    accent: "data-[hovered]:bg-accent-blue-800 data-[pressed]:bg-accent-blue-900 bg-accent-blue-700",
    regular: "data-[hovered]:bg-tuatara-900 data-[pressed]:bg-tuatara-950 bg-tuatara-800",
    transparent: "bg-transparent"
  }
  
  return (
    <RACButton className={`
    rounded-md py-0 px-4 text-gin-fizz-50 border border-1 data-[focused]:outline-none border-tuatara-950
    data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-accent-blue-300/30 data-[focus-visible]:outline-offset-1 
    ${styledTypes[buttonType]} 
    ${className as string}
    `}
    {...rest}
    >
      {children}
    </RACButton>
  )
}

export default Button