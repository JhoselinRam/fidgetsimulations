import { type MouseEvent } from "react"
import type { ButtonProps } from "./Button_types"

function Button({ children, onClick, className }: ButtonProps): JSX.Element {
  function handleClick(e: MouseEvent): void {
    onClick(e)
  }

  return (
    <button
      className={`border border-transparent rounded-md tap
			focus-visible:outline-2 focus-visible:outline-gin-fizz-50/30 focus-visible:outline
			active:outline-0
			${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
