import { Checkbox } from "react-aria-components"
import type { TitleProps } from "./ParametersTitle_types"

function ParametersTitle({
  isCollapsed,
  setIsCollapsed
}: TitleProps): JSX.Element {
  return (
    <Checkbox isSelected={isCollapsed} onChange={setIsCollapsed}>
      Parameters
    </Checkbox>
  )
}

export default ParametersTitle
