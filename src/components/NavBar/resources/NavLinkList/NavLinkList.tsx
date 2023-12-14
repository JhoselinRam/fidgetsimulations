import { useContext } from "react"
import type { NavLinkListProps } from "./NavLinkList_types"
import { navBarContext } from "../../hooks/useNavbar/useNavbar"

function NavLinkList({ children }: NavLinkListProps): JSX.Element {
  const { isCollapsed, isQueryMeet } = useContext(navBarContext)

  return (
    <ul
      className={`flex flex-col gap-5 absolute top-full left-0 w-screen pr-0 bg-tuatara-950
		md:static md:flex-row md:items-center md:w-auto md:pr-5 md:scale-y-100
    transition-transform origin-top ${
      isCollapsed ? "scale-y-0 child:opacity-0" : "scale-y-100 child:text-100"
    } 
    ${!isCollapsed && !isQueryMeet ? "shadow-visible" : "shadow-none"}`}
    >
      {children}
    </ul>
  )
}

export default NavLinkList
