import { useState } from "react"
import CollectionSelect from "./resources/CollectionSelect/CollectionSelect"
import type { CollectionOption } from "./resources/CollectionSelect/CollectionSelect_types"
import CollectionGrid from "./resources/CollectionGrid/CollectionGrid"

function CollectionPicker(): JSX.Element {
  const [selection, setSelection] = useState<CollectionOption>("visualization")

  return (
    <section className="h-56 bg-tuatara-800 mx-2 mt-4 border border-tuatara-500 rounded-md pt-1 px-3 flex flex-col">
      <CollectionSelect
        selectedKey={selection}
        onSelectionChange={setSelection}
      />
      <CollectionGrid selection={selection} />
    </section>
  )
}

export default CollectionPicker
