import type { PropsWithChildren } from "react"

export interface ConfigSectionProps extends PropsWithChildren {
  title: string
  dropDefault?: boolean
}
