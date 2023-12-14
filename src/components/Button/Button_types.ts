import type { ButtonProps as RACButtonProps } from "react-aria-components"

export interface ButtonProps extends RACButtonProps {
  buttonType?: ButtonType
}

export type ButtonType = "accent" | "regular" | "transparent"

export type StyledTypes = {
  [k in ButtonType]: string
}
