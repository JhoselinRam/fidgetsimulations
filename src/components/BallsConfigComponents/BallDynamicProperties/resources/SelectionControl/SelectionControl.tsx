import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Select from "../../../../Select/Select"
import RenameItem from "../../../../RenameItem/RenameItem"

function SelectionControl(): JSX.Element {
  return (
    <>
      <ConfigSection.Header>
        <RenameItem className="w-full mx-2" />
      </ConfigSection.Header>
      <ConfigSection.Section>
        <Select></Select>
      </ConfigSection.Section>
    </>
  )
}

export default SelectionControl
