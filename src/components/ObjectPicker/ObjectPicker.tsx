import { useState } from "react"
import Collections from "./resources/Collections/Collections"
import type { CollectionOption } from "./resources/Collections/Collections_types"
import CollectionGrid from "./resources/CollectionGrid/CollectionGrid"

function ObjectPicker(): JSX.Element {
  const [selection, setSelection] = useState<CollectionOption>("graphical")

  return (
    <section className="h-56 bg-tuatara-800 mx-2 mt-6 border border-1 border-tuatara-500 rounded-md pt-1 px-3 flex flex-col">
      <Collections selectedKey={selection} onSelectionChange={setSelection} />
      <CollectionGrid selection={selection} />
    </section>
  )
}

export default ObjectPicker
