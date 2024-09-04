import useConfigSheet from "../../../hooks/UseConfigSheet/useConfigSheet"
import ConfigCollection from "../../ConfigCollection/ConfigCollection"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import CreateLinkObject from "../../LinkObjectConfigComponents/CreateLinkObject/CreateLinkObject"
import LinkObjectBallProperties from "../../LinkObjectConfigComponents/LinkObjectBallProperties/LinkObjectBallProperties"
import LinkObjectDynamics from "../../LinkObjectConfigComponents/LinkObjectDynamics/LinkObjectDynamics"
import SheetProperties from "../../SheetConfigComponents/SheetProperties/SheetProperties"

function ConfigSheet({ item }: ConfigCollectionProps): JSX.Element {
  const { propertiesHooks, dynamicsHooks, ballPropertiesHooks, createSheet } =
    useConfigSheet(item)

  return (
    <ConfigCollection item={item}>
      <SheetProperties {...propertiesHooks} />
      <LinkObjectDynamics type="sheet" {...dynamicsHooks} />
      <LinkObjectBallProperties type="sheet" {...ballPropertiesHooks} />
      <CreateLinkObject onCreate={createSheet} />
    </ConfigCollection>
  )
}

export default ConfigSheet
