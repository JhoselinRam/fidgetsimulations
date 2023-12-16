import Button from "../../../Button/Button"
import type { NavLinkProps } from "./NavLink_types"

function NavLink({ children }: NavLinkProps): JSX.Element {
  return (
    <li>
      <Button
        className="!px-0 w-full text-start data-[focus-visible]:!outline-none 
        data-[hovered]:bg-tuatara-900 data-[focus-visible]:bg-tuatara-900
        md:relative md:after:absolute md:after:w-full md:after:h-[2px] md:after:bg-accent-blue-400 md:after:left-0 
        md:after:top-full md:after:scale-x-0 md:data-[hovered]:after:scale-x-100 md:after:transition-transform 
        md:data-[pressed]:after:bg-accent-blue-600 md:data-[focus-visible]:after:scale-x-100"
        buttonType="transparent"
      >
        {children}
      </Button>
    </li>
  )
}

export default NavLink
