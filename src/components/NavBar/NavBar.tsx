import { useMenuToggle } from "../../hooks/useMenuToggle/useMenuToggle"
import NavLinks from "./resources/NavLinks/NavLinks"
import NavLogo from "./resources/NavLogo/NavLogo"
import { navBarContext } from "./context"

function NavBar(): JSX.Element {
  const state = useMenuToggle(import.meta.env.VITE_MENU_TOGGLE_QUERY)

  function getHeaderElement(e: HTMLElement): void {
    if (e == null) return
    state.addElementInMenu(e)
  }

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
        ref={getHeaderElement}
      >
        <NavLogo />
        <NavLinks />
      </header>
    </navBarContext.Provider>
  )
}

export default NavBar
