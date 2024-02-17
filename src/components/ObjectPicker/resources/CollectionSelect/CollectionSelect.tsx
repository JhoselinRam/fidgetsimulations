import Select from "../../../Select/Select"
import {
  CollectionArray,
  type CollectionOption,
  type CollectionSelectProps
} from "./CollectionSelect_types"

function CollectionSelect({
  onSelectionChange,
  selectedKey
}: CollectionSelectProps): JSX.Element {
  const items = CollectionArray.map((item) => {
    return {
      id: item,
      name: `${item[0].toUpperCase()}${item.slice(1)}`
    }
  })

  return (
    <Select
      defaultSelectedKey={2}
      label="Collections"
      className="flex-col items-center"
      labelClassName="text-zinc-300"
      matchSize={true}
      items={items}
      onSelectionChange={(item) => {
        onSelectionChange(item as CollectionOption)
      }}
      selectedKey={selectedKey}
    >
      {(item) => <Select.Item>{item.name}</Select.Item>}
    </Select>
  )
}

export default CollectionSelect
