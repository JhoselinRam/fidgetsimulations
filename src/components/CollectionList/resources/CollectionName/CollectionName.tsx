import type { CollectionNameProps } from "./CollectionName_types"

function CollectionName({ name }: CollectionNameProps): JSX.Element {
  return <p className="flex-grow text-nowrap overflow-hidden">{name}</p>
}
export default CollectionName
