import { useContext, useRef } from "react"
import { mainAreaContext } from "./context"
import { mainStateContext } from "../../hooks/useMainState/useMainState"
import type { GraphicSelector } from "../../hooks/useMainState/resources/GraphicElement/GraphicElement_types"
import SimulationWindow from "../SimulationWindow/SimulationWindow"
import Linechart from "../Linechart/Linechart"
import DataOutPut from "../DataOutput/DataOutput"

function MainArea(): JSX.Element {
  const mainAreaElement = useRef<HTMLDivElement>(null)
  const { mainState } = useContext(mainStateContext)
  const graphicSelector: GraphicSelector = {
    simulationWindow: (id) => <SimulationWindow key={id} />,
    linechart: (id) => <Linechart key={id} id={id} />,
    dataoutput: (id) => <DataOutPut key={id} id={id} />
  }

  return (
    <div
      className="w-full h-full bg-gin-fizz-50 bg-repeat bg-grid overflow-scroll relative bg-local"
      ref={mainAreaElement}
    >
      <mainAreaContext.Provider value={mainAreaElement}>
        {mainState.order.map((element) =>
          graphicSelector[element.type](element.id)
        )}
      </mainAreaContext.Provider>
    </div>
  )
}

export default MainArea
