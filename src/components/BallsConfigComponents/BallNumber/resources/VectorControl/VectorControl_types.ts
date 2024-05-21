import type { VectorConfigType } from "../../../BallConfigComponents_types"

export interface VectorControlProps extends VectorConfigType {
  isSelected: boolean
  onChange: (value: boolean) => void
}
