import { Input, TextField } from "react-aria-components"
import BaseCell from "../BaseCell/BaseCell"
import type { TextCellProps } from "./TextCell_types"

function TextCell({ ...hooks }: TextCellProps): JSX.Element {
  return (
    <BaseCell>
      <TextField
        className="w-full hover:cursor-cell"
        {...hooks}
        aria-label="ball name"
      >
        <Input className="w-full bg-transparent outline-none data-[hovered]:cursor-cell" />
      </TextField>
    </BaseCell>
  )
}

export default TextCell
