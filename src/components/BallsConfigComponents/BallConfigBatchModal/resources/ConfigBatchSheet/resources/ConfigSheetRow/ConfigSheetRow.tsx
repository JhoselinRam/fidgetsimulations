import useSheetRow from "../../../../../../../hooks/useConfigBatchModal/resources/useSheetRow/useSheetRow"
import CheckCell from "../CheckCell/CheckCell"
import ColorCell from "../ColorCell/ColorCell"
import HeaderCell from "../HeaderCell/HeaderCell"
import NumberCell from "../NumberCell/NumberCell"
import TextCell from "../TextCell/TextCell"
import type { ConfigSheetRowProps } from "./ConfigSheetRow_types"

function ConfigSheetRow({ data, index }: ConfigSheetRowProps): JSX.Element {
  const {
    charge,
    color,
    deleteBall,
    mass,
    name,
    positionX,
    positionY,
    radius,
    velocityX,
    velocityY,
    selectOnFocus
  } = useSheetRow(data)

  return (
    <>
      <HeaderCell>{index + 1}</HeaderCell>
      <TextCell {...name} selectOnFocus={selectOnFocus} />
      <NumberCell
        selectOnFocus={selectOnFocus}
        {...positionX}
        labelBy="ball position x"
      />
      <NumberCell
        selectOnFocus={selectOnFocus}
        {...positionY}
        labelBy="ball position y"
      />
      <NumberCell
        selectOnFocus={selectOnFocus}
        {...velocityX}
        labelBy="ball velocity x"
      />
      <NumberCell
        selectOnFocus={selectOnFocus}
        {...velocityY}
        labelBy="ball velocity y"
      />
      <NumberCell selectOnFocus={selectOnFocus} {...mass} labelBy="ball mass" />
      <NumberCell
        selectOnFocus={selectOnFocus}
        {...charge}
        labelBy="ball charge"
      />
      <NumberCell
        selectOnFocus={selectOnFocus}
        {...radius}
        labelBy="ball radius"
      />
      <ColorCell {...color} />
      <CheckCell {...deleteBall} />
    </>
  )
}

export default ConfigSheetRow
