import { useContext, useRef } from "react"
import type { LinechartProps } from "./Linechart_types"
import { mainAreaContext } from "../MainArea/context"
import type { WindowElementRef } from "../WindowElement/WindowElement_types"
import WindowElement from "../WindowElement/WindowElement"
import useLinechart from "../../hooks/useLinechart/useLinechart"

function Linechart({ id }: LinechartProps): JSX.Element {
  const mainAreaElement = useContext(mainAreaContext)
  const windowHandlers = useRef<WindowElementRef | null>(null)
  const graphElement = useRef<HTMLDivElement>(null)
  useLinechart(graphElement, id)

  return (
    <WindowElement
      mainAreaElement={mainAreaElement}
      ref={windowHandlers}
      id={id}
      type="linechart"
    >
      <div ref={graphElement}></div>
    </WindowElement>
  )
}

export default Linechart
