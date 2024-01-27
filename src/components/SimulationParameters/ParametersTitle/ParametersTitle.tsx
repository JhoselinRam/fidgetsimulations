import { Checkbox } from "react-aria-components"
import type { TitleProps } from "./ParametersTitle_types"
import CollapseArrowIcon from "../../Icons/CollapseArrowIcon/CollapseArrow"

function ParametersTitle({
  isCollapsed,
  setIsCollapsed
}: TitleProps): JSX.Element {
  return (
    <Checkbox
      className="text-zinc-300 text-xl flex flex-row gap-4 items-center"
      isSelected={isCollapsed}
      onChange={setIsCollapsed}
    >
      Parameters
      <div className="w-4">
        <CollapseArrowIcon
          className="stroke-zinc-300"
          isCollapsed={isCollapsed}
        />
      </div>
    </Checkbox>
  )
}

export default ParametersTitle
