import type { NavLinkListProps } from "./NavLinkList_types"

function NavLinkList({ children }: NavLinkListProps): JSX.Element {
  return (
    <ul
      className="flex flex-col gap-5 absolute top-full left-0 w-screen pr-0 bg-tuatara-950 scale-y-0
		md:static md:flex-row md:items-center md:w-auto md:pr-5"
    >
      {children}
    </ul>
  )
}

export default NavLinkList
