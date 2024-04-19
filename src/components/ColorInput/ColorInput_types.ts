import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react"

export interface ColorInputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "onChange" | "onInput" | "value"
  > {
  children?: ReactNode
  containerClassName?: string
  onChange?: (color: string) => void
  onInput?: (color: string) => void
  value?: string
}
