import { useMenuToggle } from "../../hooks/useMenuToggle/useMenuToggle"
import NavLinks from "./resources/NavLinks/NavLinks"
import NavLogo from "./resources/NavLogo/NavLogo"
import { navBarContext } from "./context"
import { useRef } from "react"

function NavBar(): JSX.Element {
  const state = useMenuToggle(import.meta.env.VITE_MENU_TOGGLE_QUERY)
  const headerElement = useRef<HTMLElement>(null)

  state.addElementInMenu(headerElement)

  return (
    <navBarContext.Provider value={state}>
      <header
        id="navBarHeader"
        className={`w-100 bg-tuatara-950 text-zinc-300 grow-0 shrink-0 flex flex-row justify-between items-center relative 
      ${
        !state.isCollapsed && !state.isQueryMeet
          ? "shadow-none"
          : "shadow-visible"
      }`}
        ref={headerElement}
      >
        <NavLogo />
        <NavLinks />
      </header>
    </navBarContext.Provider>
  )
}

export default NavBar
