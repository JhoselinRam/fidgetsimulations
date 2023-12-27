import { useEffect } from "react"
import {
  MenuToggleContext,
  useMenuToggle
} from "../../hooks/useMenuToggle/useMenuToggle"
import NavLinks from "./resources/NavLinks/NavLinks"
import NavLogo from "./resources/NavLogo/NavLogo"

function NavBar(): JSX.Element {
  const state = useMenuToggle(import.meta.env.VITE_MENU_TOGGLE_QUERY)

  useEffect(() => {
    console.log(state.isQueryMeet)
  }, [state.isQueryMeet])

  return (
    <MenuToggleContext.Provider value={state}>
      <header
        className={`w-100 bg-tuatara-950 text-gin-fizz-50 flex flex-row justify-between items-center relative 
      ${
        !state.isCollapsed && !state.isQueryMeet
          ? "shadow-none"
          : "shadow-visible"
      }`}
      >
        <NavLogo />
        <NavLinks />
      </header>
    </MenuToggleContext.Provider>
  )
}

export default NavBar
