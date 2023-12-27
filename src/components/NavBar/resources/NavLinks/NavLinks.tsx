import NavHamburger from "../NavHamburger/NavHamburger"
import NavLink from "../NavLink/NavLink"
import NavLinkList from "../NavLinkList/NavLinkList"

function NavLinks(): JSX.Element {
  return (
    <nav className="flex self-stretch">
      <NavHamburger />
      <NavLinkList>
        <NavLink>Examples</NavLink>
        <NavLink>Load</NavLink>
        <NavLink>Save</NavLink>
      </NavLinkList>
    </nav>
  )
}

export default NavLinks
