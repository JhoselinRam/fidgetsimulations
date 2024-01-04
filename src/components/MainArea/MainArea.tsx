import type { MainAreaProps } from "./MainArea_types"

function MainArea({ children }: MainAreaProps): JSX.Element {
  return (
    <div className="w-full h-full bg-gin-fizz-50 bg-repeat bg-grid overflow-scroll relative">
      {children}
    </div>
  )
}

export default MainArea
