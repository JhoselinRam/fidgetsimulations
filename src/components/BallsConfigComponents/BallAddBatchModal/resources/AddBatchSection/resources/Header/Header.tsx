import type { HeaderProps } from "./Header_types"

function Header({ children, className }: HeaderProps): JSX.Element {
  return (
    <h3
      className={`text-zinc-300 z-50 flex flex-row gap-2 mt-1 first:-mb-3 last:mb-0 ${className}`}
    >
      {children}
    </h3>
  )
}

export default Header
