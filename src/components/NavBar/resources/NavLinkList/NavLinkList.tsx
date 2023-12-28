import { useContext } from "react"
import type { NavLinkListProps } from "./NavLinkList_types"
import { navBarContext } from "../../context"

function NavLinkList({ children }: NavLinkListProps): JSX.Element {
  const { isCollapsed, isQueryMeet, addElementInMenu } =
    useContext(navBarContext)

  function getUlElement(e: HTMLUListElement): void {
    if (e == null) return

    addElementInMenu(e)
  }

  return (
    <ul
      id="navBarLinks"
      className={`flex z-50 flex-col absolute top-full left-0 w-screen pr-0 bg-tuatara-950
		md:static md:flex-row md:items-center md:w-auto md:pr-5 md:scale-y-100 md:pl-0 md:gap-5
    xl:absolute xl:top-0 xl:bottom-0 xl:left-1/2 xl:-translate-x-1/2
    transition-transform origin-top ${
      isCollapsed ? "scale-y-0 child:opacity-0" : "scale-y-100 child:text-100"
    } 
    ${!isCollapsed && !isQueryMeet ? "shadow-visible" : "shadow-none"}`}
      ref={getUlElement}
    >
      {children}
    </ul>
  )
}

export default NavLinkList
