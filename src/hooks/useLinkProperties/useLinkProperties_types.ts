import type { SimpleState } from "../useMainState/useMainState_types"

export interface UseLinkProperties {
  colorHooks: SimpleState<string>
  opacityHooks: SimpleState<number>
}

export interface LinkPropertiesProps {
  color: string
  opacity: number
}
