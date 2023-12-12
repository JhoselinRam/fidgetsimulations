import NavLinks from "./resources/NavLinks/NavLinks"
import NavLogo from "./resources/NavLogo/NavLogo"

function NavBar(): JSX.Element {
  return (
    <header className="w-100 bg-tuatara-950 text-gin-fizz-50 flex flex-row justify-between items-center relative">
      <NavLogo />
      <NavLinks />
    </header>
  )
}

export default NavBar
