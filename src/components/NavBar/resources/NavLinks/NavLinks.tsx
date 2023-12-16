import NavHamburger from "../NavHamburger/NavHamburger"
import NavLink from "../NavLink/NavLink"
import NavLinkList from "../NavLinkList/NavLinkList"

function NavLinks(): JSX.Element {
  return (
    <nav className="flex justify-center">
      <NavLinkList>
        <NavLink>Examples</NavLink>
        <NavLink>Load</NavLink>
        <NavLink>Save</NavLink>
      </NavLinkList>
      <NavHamburger />
    </nav>
  )
}

export default NavLinks
