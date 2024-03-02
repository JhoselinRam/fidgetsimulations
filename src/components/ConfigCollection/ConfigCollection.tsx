import type { ConfigCollectionProps } from "./ConfigCollection_types"
import RenameCollection from "./resources/RenameCollection/RenameCollection"

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
