import type { BodyProps } from "./Body_types"

function Body({ isDrop, children, className }: BodyProps): JSX.Element {
  return (
    <div
      className={`w-full overflow-hidden transition-all origin-top ${
        isDrop ? "max-h-96" : "max-h-0"
      }`}
    >
      <div
        className={`w-full ${
          isDrop ? "opacity-100" : "opacity-0"
        } transition-all origin-top ${className}`}
      >
        {children}
      </div>
    </div>
  )
}

export default Body
