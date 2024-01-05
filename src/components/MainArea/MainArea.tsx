import type { MainAreaProps } from "./MainArea_types"
import { useRef } from "react"
import { mainAreaContext } from "./context"

function MainArea({ children }: MainAreaProps): JSX.Element {
  const mainAreaElement = useRef<HTMLDivElement>(null)
  return (
    <div
      className="w-full h-full bg-gin-fizz-50 bg-repeat bg-grid overflow-scroll relative"
      ref={mainAreaElement}
    >
      <mainAreaContext.Provider value={mainAreaElement}>
        {children}
      </mainAreaContext.Provider>
    </div>
  )
}

export default MainArea
