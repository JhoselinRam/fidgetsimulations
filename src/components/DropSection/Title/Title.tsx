import { Switch as RASwitch } from "react-aria-components"
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
    <RASwitch
      className={`flex flex-row items-center gap-3 group data-[hovered]:cursor-pointer ${className}`}
      isSelected={isDrop}
      onChange={onChange}
    >
      {children}
      <div className="w-3">
        <DropArrowIcon
          className={`rounded-sm group-data-[focus-visible]:outline group-data-[focus-visible]:outline-2 
          group-data-[focus-visible]:outline-accent-blue-300/30 group-data-[focus-visible]:outline-offset-4
          ${iconClassName}`}
          isDrop={isDrop}
        />
      </div>
    </RASwitch>
  )
}

export default Title
