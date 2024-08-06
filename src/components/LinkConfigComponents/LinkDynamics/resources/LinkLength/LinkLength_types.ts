import type { ReactNode } from "react"
import type { LinkDynamicsHooks } from "../../../../../hooks/useLinkDynamics/useLinkDynamics_types"

export interface LinkLengthProps
  extends Pick<LinkDynamicsHooks, "lengthHooks"> {
  lengthInfo: ReactNode
  lengthClassName?: string
}
