import useGridConfig from "../../hooks/useGridConfig/useGridConfig"
import ConfigSection from "../ConfigSection/ConfigSection"
import type { GridConfigProps } from "./GridConfig_types"
import GridSection from "./resources/GridSection/GridSection"

function GridConfig({ item }: GridConfigProps): JSX.Element {
  const gridHooks = useGridConfig(item)

  return (
    <ConfigSection title="Grid">
      <GridSection grid="primary" hooks={gridHooks} />
      <div className="h-4"></div>
      <GridSection grid="secondary" hooks={gridHooks} />
    </ConfigSection>
  )
}

export default GridConfig
