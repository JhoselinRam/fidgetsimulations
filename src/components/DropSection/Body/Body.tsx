import type { BodyProps } from "./Body_types"

function Body({ isDrop, children, className }: BodyProps): JSX.Element {
  return <div className={`w-full ${className}`}>{children}</div>
}

export default Body
