import type { UseGridConfig } from "../../../../hooks/useGridConfig/useGridConfig_types"

export interface GridSectionProps {
  grid: "primary" | "secondary"
  hooks: UseGridConfig
}
