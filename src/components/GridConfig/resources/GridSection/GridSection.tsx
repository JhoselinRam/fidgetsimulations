import ColorInput from "../../../ColorInput/ColorInput"
import ConfigSection from "../../../ConfigSection/ConfigSection"
import Switch from "../../../Switch/Switch"
import type { GridSectionProps } from "./GridSection_types"

function GridSection({ grid, hooks }: GridSectionProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header>
        <p>{`${grid[0].toUpperCase()}${grid.slice(1)}`}</p>
      </ConfigSection.Header>
      <ConfigSection.Section className="pl-2">
        <Switch
          isSelected={hooks[grid].enable}
          onChange={hooks[grid].changeEnable}
        >
          Enable
        </Switch>
        <ColorInput
          value={hooks[grid].color}
          onChange={hooks[grid].changeColor}
        >
          Color:{" "}
        </ColorInput>
      </ConfigSection.Section>
    </>
  )
}

export default GridSection
