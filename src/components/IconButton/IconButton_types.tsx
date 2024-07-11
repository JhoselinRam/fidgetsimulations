import type { ButtonProps } from "../Button/Button_types"

export interface IconButtonProps extends ButtonProps {
  coloredBy: "fill" | "stroke" | "all"
}
