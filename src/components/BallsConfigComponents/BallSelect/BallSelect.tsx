import Select from "../../Select/Select"
import type { BallSelectProps } from "./BallSelect_types"

function BallSelect({ ballId, changeId, items }: BallSelectProps): JSX.Element {
  return (
    <Select
      items={items}
      selectedKey={ballId}
      onSelectionChange={changeId}
      className="mt-2 mx-1"
      matchSize={true}
    >
      {(item) => <Select.Item>{item.name}</Select.Item>}
    </Select>
  )
}

export default BallSelect
