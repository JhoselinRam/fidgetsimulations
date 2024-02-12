import type { DataOutputProps } from "./DataOutput_types"
import { useContext, useRef } from "react"
import { mainAreaContext } from "../MainArea/context"
import type { WindowElementRef } from "../WindowElement/WindowElement_types"
import WindowElement from "../WindowElement/WindowElement"

function DataOutPut({ id }: DataOutputProps): JSX.Element {
  const mainAreaElement = useContext(mainAreaContext)
  const windowHandlers = useRef<WindowElementRef | null>(null)

  return (
    <WindowElement
      mainAreaElement={mainAreaElement}
      ref={windowHandlers}
      id={id}
      type="dataoutput"
    >
      <div className="w-full h-full bg-white">Data</div>
    </WindowElement>
  )
}

export default DataOutPut
