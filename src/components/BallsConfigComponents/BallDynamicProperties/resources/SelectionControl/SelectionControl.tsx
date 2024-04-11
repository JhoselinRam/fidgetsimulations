import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Select from "../../../../Select/Select"
import RenameItem from "../../../../RenameItem/RenameItem"
import type { SelectionControlProps } from "./SelectionControl_types"

function SelectionControl({
  ballId,
  changeId,
  items,
  renameHooks
}: SelectionControlProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header>
        <RenameItem {...renameHooks} className="w-full mx-2" />
      </ConfigSection.Header>
      <ConfigSection.Section>
        <Select
          items={items}
          selectedKey={ballId}
          onSelectionChange={changeId}
          matchSize={true}
        >
          {(item) => <Select.Item>{item.name}</Select.Item>}
        </Select>
      </ConfigSection.Section>
    </>
  )
}

export default SelectionControl
