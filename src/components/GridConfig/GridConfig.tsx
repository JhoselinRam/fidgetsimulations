import ConfigSection from "../ConfigSection/ConfigSection"
import type { GridConfigProps } from "./GridConfig_types"
import GridSection from "./resources/GridSection/GridSection"

function GridConfig({ item }: GridConfigProps): JSX.Element {
  return (
    <ConfigSection title="Grid">
      <GridSection grid="primary" />
      <div className="h-4"></div>
      <GridSection grid="secondary" />
    </ConfigSection>
  )
}

export default GridConfig
