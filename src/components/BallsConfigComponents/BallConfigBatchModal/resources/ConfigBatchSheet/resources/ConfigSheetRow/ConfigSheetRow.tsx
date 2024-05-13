import useSheetRow from "../../../../../../../hooks/useConfigBatchSheet/resources/useSheetRow/useSheetRow"
import CheckCell from "../CheckCell/CheckCell"
import ColorCell from "../ColorCell/ColorCell"
import HeaderCell from "../HeaderCell/HeaderCell"
import NumberCell from "../NumberCell/NumberCell"
import TextCell from "../TextCell/TextCell"
import type { ConfigSheetRowProps } from "./ConfigSheetRow_types"

function ConfigSheetRow({
  data,
  index,
  setSelectedCell,
  setSelectionMode,
  blurCell
}: ConfigSheetRowProps): JSX.Element {
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
    velocityY
  } = useSheetRow(data, index, setSelectedCell, setSelectionMode, blurCell)

  return (
    <>
      <HeaderCell>{index + 1}</HeaderCell>
      <TextCell {...name} />
      <NumberCell {...positionX} labelBy="ball position x" />
      <NumberCell {...positionY} labelBy="ball position y" />
      <NumberCell {...velocityX} labelBy="ball velocity x" />
      <NumberCell {...velocityY} labelBy="ball velocity y" />
      <NumberCell {...mass} labelBy="ball mass" />
      <NumberCell {...charge} labelBy="ball charge" />
      <NumberCell {...radius} labelBy="ball radius" />
      <ColorCell {...color} />
      <CheckCell {...deleteBall} />
    </>
  )
}

export default ConfigSheetRow
