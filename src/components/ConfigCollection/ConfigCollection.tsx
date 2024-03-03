import RenameCollection from "../RenameCollection/RenameCollection"
import type { ConfigCollectionProps } from "./ConfigCollection_types"

function ConfigCollection({
  item,
  children
}: ConfigCollectionProps): JSX.Element {
  return (
    <section className="p-2 w-full">
      <RenameCollection item={item} />
      {children}
    </section>
  )
}

export default ConfigCollection
