import { Switch } from "react-aria-components"
import type { TitleProps } from "./Title_types"
import DropArrowIcon from "../../Icons/DropArrowIcon/DropArrowIcon"

function Title({
  isDrop,
  onChange,
  children,
  className,
  iconClassName
}: TitleProps): JSX.Element {
  return (
    <Switch
      className={`flex flex-row items-center gap-3 ${className}`}
      isSelected={isDrop}
      onChange={onChange}
    >
      {children}
      <div className="w-3">
        <DropArrowIcon className={`${iconClassName}`} isDrop={isDrop} />
      </div>
    </Switch>
  )
}

export default Title
