import CheckInput from "../../../../../../CheckInput/CheckInput"
import HeaderCell from "../HeaderCell/HeaderCell"
import type { ConfigSheetHeaderProps } from "./ConfigSheetHeader_types"

function ConfigSheetHeader({
  deleteAllValue,
  onDeleteAll
}: ConfigSheetHeaderProps): JSX.Element {
  return (
    <>
      <HeaderCell />
      <HeaderCell>Name</HeaderCell>
      <HeaderCell>Position x</HeaderCell>
      <HeaderCell>Position y</HeaderCell>
      <HeaderCell>Velocity x</HeaderCell>
      <HeaderCell>Velocity y</HeaderCell>
      <HeaderCell>Mass</HeaderCell>
      <HeaderCell>Charge</HeaderCell>
      <HeaderCell>Radius</HeaderCell>
      <HeaderCell>Color</HeaderCell>
      <HeaderCell>
        <CheckInput
          isSelected={deleteAllValue}
          onChange={onDeleteAll}
          className="!flex-row-reverse gap-1"
          size="sm"
          type="danger"
        >
          Delete
        </CheckInput>
      </HeaderCell>
    </>
  )
}

export default ConfigSheetHeader
