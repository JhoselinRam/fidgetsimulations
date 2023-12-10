import HamburgerIcon from "../../../Icons/HamburgerIcon/HamburgerIcon"
import type { NavHamburgerProps } from "./NavHamburger_types"

function NavHamburger({setIsCollapsed}: NavHamburgerProps): JSX.Element {
  function handleClick(): void{
    setIsCollapsed(state=>!state)
  }
  
  return (
    <button className="w-10 flex justify-center mr-2 border border-transparent rounded-md outline-3 outline-gin-fizz-50/30
    md:hidden
    active:outline active:outline-3 active:outline-gin-fizz-50/30
    
    " onClick={handleClick}>
      <HamburgerIcon color="#fffae1" />
    </button>
  )
}

export default NavHamburger
