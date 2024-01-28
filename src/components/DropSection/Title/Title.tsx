import { Switch } from "react-aria-components"
import type { TitleProps } from "./Title_types"
import DropArrowIcon from "../../Icons/DropArrowIcon/DropArrowIcon"

function Title({ isDrop, onChange, children }: TitleProps): JSX.Element {
  return (
    <Switch isSelected={isDrop} onChange={onChange}>
      {children}
      <div className="w-4">
        <DropArrowIcon className="stroke-zinc-300" isDrop={isDrop} />
      </div>
    </Switch>
  )
}

export default Title
