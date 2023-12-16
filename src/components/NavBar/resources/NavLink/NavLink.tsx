import Button from "../../../Button/Button"
import type { NavLinkProps } from "./NavLink_types"

function NavLink({ children }: NavLinkProps): JSX.Element {
  return <li>
    <Button className="!px-0 relative after:absolute after:w-full after:h-[2px] after:bg-accent-blue-400 after:left-0 after:top-full
    after:scale-x-0 data-[hovered]:after:scale-x-100 after:transition-transform data-[pressed]:after:bg-accent-blue-600 data-[focus-visible]:after:scale-x-100 
    data-[focus-visible]:!outline-none"
     buttonType="transparent">
    {children}
    </Button>
    </li>
}

export default NavLink
