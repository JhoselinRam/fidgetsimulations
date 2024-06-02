import { useRef } from "react"
import { mainAreaContext } from "./context"
import useMainArea from "../../hooks/useMainArea/useMainArea"

function MainArea(): JSX.Element {
  const mainAreaElement = useRef<HTMLDivElement>(null)
  const { graphicOrder, graphicSelector } = useMainArea()

  return (
    <div
      className="w-full h-full bg-gin-fizz-50 bg-repeat bg-grid overflow-auto relative bg-local"
      ref={mainAreaElement}
    >
      <mainAreaContext.Provider value={mainAreaElement}>
        {graphicOrder.map((element) =>
          graphicSelector[element.type](element.id)
        )}
      </mainAreaContext.Provider>
    </div>
  )
}

export default MainArea
