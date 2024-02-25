import type { CollectionNameProps } from "./CollectionName_types"

function CollectionName({ editing, name }: CollectionNameProps): JSX.Element {
  return <p className="flex-grow">{name}</p>
}
export default CollectionName
