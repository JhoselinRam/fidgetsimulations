import Button from "../../../Button/Button"
import type { NavLinkProps } from "./NavLink_types"

function NavLink({ children }: NavLinkProps): JSX.Element {
  return (
    <li className="h-full flex justify-items-center">
      <Button
        className="group !pl-3 !py-2 !rounded-none w-full text-start data-[focus-visible]:!outline-none 
        data-[hovered]:bg-tuatara-900 data-[focus-visible]:bg-tuatara-900 
        md:data-[hovered]:bg-tuatara-950 md:data-[focus-visible]:bg-tuatara-950 md:!px-0 md:!py-0"
        buttonType="transparent"
      >
        <p
          className="md:relative md:after:absolute md:after:w-full md:after:h-[2px] md:after:bg-accent-blue-400 
        md:after:left-0 md:after:top-full md:after:scale-x-0 md:after:transition-transform
        md:group-data-[hovered]:after:scale-x-100 md:group-data-[pressed]:after:bg-accent-blue-600 
        md:group-data-[focus-visible]:after:scale-x-100"
        >
          {children}
        </p>
      </Button>
    </li>
  )
}

export default NavLink
