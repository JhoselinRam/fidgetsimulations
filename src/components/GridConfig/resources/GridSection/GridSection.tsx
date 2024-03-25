import ColorInput from "../../../ColorInput/ColorInput"
import ConfigSection from "../../../ConfigSection/ConfigSection"
import Switch from "../../../Switch/Switch"
import type { GridSectionProps } from "./GridSection_types"

function GridSection({ grid }: GridSectionProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header>
        <p>{`${grid[0].toUpperCase()}${grid.slice(1)}`}</p>
      </ConfigSection.Header>
      <ConfigSection.Section className="pl-2">
        <Switch>Enable</Switch>
        <ColorInput>Color: </ColorInput>
      </ConfigSection.Section>
    </>
  )
}

export default GridSection
