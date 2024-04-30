import { Input, TextField } from "react-aria-components"
import BaseCell from "../BaseCell/BaseCell"
import type { TextCellProps } from "./TextCell_types"

function TextCell({ value }: TextCellProps): JSX.Element {
  return (
    <BaseCell>
      <TextField className="w-full" value={value}>
        <Input className="w-full bg-transparent outline-none" />
      </TextField>
    </BaseCell>
  )
}

export default TextCell
