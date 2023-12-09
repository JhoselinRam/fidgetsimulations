import type { NavLinkProps } from "./NavLink_types"

function NavLink({ children }: NavLinkProps): JSX.Element {
  return <li>{children}</li>
}

export default NavLink
