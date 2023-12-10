import useCollapsed from "../../hooks/useCollapsed/useCollapsed"
import NavHamburger from "../NavHamburger/NavHamburger"
import NavLink from "../NavLink/NavLink"
import NavLinkList from "../NavLinkList/NavLinkList"

function NavLinks(): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useCollapsed("(min-width: 768px)")

  return (
    <nav className="flex justify-center">
      <NavLinkList isCollapsed={isCollapsed}>
        <NavLink>Examples</NavLink>
        <NavLink>Balls</NavLink>
        <NavLink>Load</NavLink>
        <NavLink>Save</NavLink>
      </NavLinkList>
      <NavHamburger setIsCollapsed={setIsCollapsed}/>
    </nav>
  )
}

export default NavLinks
