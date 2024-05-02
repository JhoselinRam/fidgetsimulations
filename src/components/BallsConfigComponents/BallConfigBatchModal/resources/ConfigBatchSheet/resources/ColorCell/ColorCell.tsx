import ColorInput from "../../../../../../ColorInput/ColorInput"
import BaseCell from "../BaseCell/BaseCell"
import type { ColorCellProps } from "./ColorCell_types"

function ColorCell({ value, changeValue }: ColorCellProps): JSX.Element {
  return (
    <BaseCell>
      <ColorInput
        containerClassName="w-full h-full justify-center gap-0 px-1"
        className="w-full"
        value={value}
        onChange={changeValue}
        aria-label="ball color"
      />
    </BaseCell>
  )
}

export default ColorCell
