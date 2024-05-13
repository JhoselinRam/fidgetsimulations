import CheckInput from "../../../../../../CheckInput/CheckInput"
import HeaderCell from "../HeaderCell/HeaderCell"

function ConfigSheetHeader(): JSX.Element {
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
        <CheckInput className="!flex-row-reverse gap-1" size="sm" type="danger">
          Delete
        </CheckInput>
      </HeaderCell>
    </>
  )
}

export default ConfigSheetHeader
