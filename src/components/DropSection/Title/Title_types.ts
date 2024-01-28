import type { PropsWithChildren } from "react"

export type TitleProps = PropsWithChildren<{
  isDrop: boolean
  onChange: (value: boolean) => void
}>
