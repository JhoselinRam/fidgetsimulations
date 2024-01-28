import { Switch } from "react-aria-components"
import type { TitleProps } from "./ParametersTitle_types"
import DropArrowIcon from "../../Icons/DropArrowIcon/DropArrowIcon"

function ParametersTitle({
  isCollapsed,
  setIsCollapsed
}: TitleProps): JSX.Element {
  return (
    <Switch
      className="text-zinc-300 text-xl flex flex-row gap-4 items-center"
      isSelected={isCollapsed}
      onChange={setIsCollapsed}
    >
      Parameters
      <div className="w-4">
        <DropArrowIcon className="stroke-zinc-300" isDrop={isCollapsed} />
      </div>
    </Switch>
  )
}

export default ParametersTitle
