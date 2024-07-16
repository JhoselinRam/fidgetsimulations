import type { PropsWithChildren, ReactNode } from "react"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"

export interface LinkDynamicsProps
  extends ConfigCollectionProps,
    PropsWithChildren {
  lengthInfo: ReactNode
}
