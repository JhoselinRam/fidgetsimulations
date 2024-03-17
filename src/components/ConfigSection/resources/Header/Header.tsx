import type { HeaderProps } from "./Header_types"

function Header({ children, className }: HeaderProps): JSX.Element {
  return (
    <h1
      className={`flex flex-row items-center text-zinc-300 gap-3 -mb-3 z-50 ${className}`}
    >
      {children}
    </h1>
  )
}

export default Header
