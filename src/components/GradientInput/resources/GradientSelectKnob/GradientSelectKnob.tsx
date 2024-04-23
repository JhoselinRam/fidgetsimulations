import Select from "../../../Select/Select"
import type { GradientSelectKnobProps } from "./GradientSelectKnob_types"

function GradientSelectKnob({
  changeKnobSelected,
  knobSelected,
  knobs,
  isDisabled
}: GradientSelectKnobProps): JSX.Element {
  const items = knobs.map((_, index) => {
    return { id: `${index}`, name: `${index}` }
  })

  return (
    <Select
      items={items}
      matchSize={true}
      selectedKey={`${knobSelected}`}
      onSelectionChange={(key) => {
        changeKnobSelected(parseInt(key as string))
      }}
      label="Knob"
      className="gap-[1.63rem]"
      selectorClassName="!w-14"
      isDisabled={isDisabled}
    >
      {(item) => <Select.Item>{item.name}</Select.Item>}
    </Select>
  )
}

export default GradientSelectKnob
