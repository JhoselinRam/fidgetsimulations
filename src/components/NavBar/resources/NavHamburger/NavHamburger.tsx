import { useContext } from "react"
import Button from "../../../Button/Button"
import HamburgerIcon from "../../../Icons/HamburgerIcon/HamburgerIcon"
import { navBarContext } from "../../hooks/useNavbar/useNavbar"

function NavHamburger(): JSX.Element {
  const {setIsCollapsed} = useContext(navBarContext)
  
  function handleClick(): void {
    setIsCollapsed((state) => !state)
  }
  
  return (
    <Button className="w-10 flex justify-center !px-0 mr-2 md:hidden" 
    buttonType="transparent"
    aria-label="menu"
    onPress={handleClick}>
      <HamburgerIcon color="#fffae1" />
    </Button>
  )
}

export default NavHamburger