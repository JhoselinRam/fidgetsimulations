import ColorInput from "../../../../../../ColorInput/ColorInput"
import BaseCell from "../BaseCell/BaseCell"
import type { ColorCellProps } from "./ColorCell_types"

function ColorCell({ value }: ColorCellProps): JSX.Element {
  return (
    <BaseCell>
      <ColorInput
        containerClassName="w-full h-full justify-center gap-0 px-1"
        className="w-full"
        value={value}
      />
    </BaseCell>
  )
}

export default ColorCell
