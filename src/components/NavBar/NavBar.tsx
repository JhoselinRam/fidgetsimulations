import { navBarContext, useNavbar } from "./hooks/useNavbar/useNavbar"
import NavLinks from "./resources/NavLinks/NavLinks"
import NavLogo from "./resources/NavLogo/NavLogo"

function NavBar(): JSX.Element {
  const state = useNavbar("(min-width: 768px)")

  return (
    <navBarContext.Provider value={state}>
      <header className="w-100 bg-tuatara-950 text-gin-fizz-50 flex flex-row justify-between items-center relative shadow-visible">
        <NavLogo />
        <NavLinks />
      </header>
    </navBarContext.Provider>
  )
}

export default NavBar
