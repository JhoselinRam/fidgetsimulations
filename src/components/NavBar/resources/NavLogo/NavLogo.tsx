import LogoImg from "../LogoImg/LogoImg"
import LogoText from "../LogoText/LogoText"

function NavLogo(): JSX.Element {
  return (
    <div className="flex flex-row items-center">
      <LogoImg />
      <LogoText />
    </div>
  )
}

export default NavLogo
