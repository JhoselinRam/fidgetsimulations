import type { GradientColorSpace } from "../../../../hooks/useGradientInput/resources/useGradientStep/useGradientStep_types"
import Select from "../../../Select/Select"
import type { GradientFormSelectProps } from "./GradientFormSelect_types"

function GradientFormSelect({
  changeSpace,
  space
}: GradientFormSelectProps): JSX.Element {
  const items = [
    { id: "rgb", name: "rgb" },
    { id: "hsv", name: "hsv" },
    { id: "xyz", name: "xyz" },
    { id: "lab", name: "lab" },
    { id: "lch", name: "lch" }
  ]
  return (
    <div className="flex flex-row gap-3">
      <Select
        label="Color Space:"
        className="flex-col basis-full"
        labelClassName="text-zinc-300"
        matchSize={true}
        items={items}
        selectedKey={space}
        onSelectionChange={(selection) => {
          changeSpace(selection as GradientColorSpace)
        }}
      >
        {(item) => <Select.Item>{item.name}</Select.Item>}
      </Select>
      <div className="basis-full"></div>
    </div>
  )
}

export default GradientFormSelect
